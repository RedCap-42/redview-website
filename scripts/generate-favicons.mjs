import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REDVIEW_ROOT = path.resolve(__dirname, '../..');
const WEBSITE_DIR = path.resolve(REDVIEW_ROOT, 'redview-website');
const APP_DIR = path.resolve(REDVIEW_ROOT, 'redview-app');

const SVG_CONTENT = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="10" fill="#0d1117"/>
  <g transform="translate(4.5, 4.5)">
    <path clip-rule="evenodd" d="M19.4062 0C30.1245 4.68511e-07 38.8135 8.68894 38.8135 19.4072C38.8134 30.1255 30.1245 38.8145 19.4062 38.8145H0V19.4072C4.68499e-07 8.68922 8.68835 0.000449258 19.4062 0ZM18.3975 9.5752C16.4695 6.89461 13.0946 6.02423 10.8594 7.63184C8.62427 9.23948 8.37583 12.7159 10.3037 15.3965C10.6901 15.9337 11.1354 16.3968 11.6172 16.7832C8.02224 19.2662 5.54738 23.1551 5.85449 28.0723C10.6499 41.0727 34.9963 36.8349 32.8154 20.3682C30.9355 16.1664 27.0222 14.0922 22.7451 13.7637C24.6583 14.907 25.9403 16.9979 25.9404 19.3887C25.9403 23.0056 23.0075 25.9373 19.3906 25.9375C15.7739 25.9371 12.8419 23.0055 12.8418 19.3887C12.8418 18.7932 12.9223 18.2164 13.0713 17.668C14.6945 18.3774 16.4797 18.3195 17.8418 17.3398C20.077 15.7322 20.3253 12.2558 18.3975 9.5752Z" fill="#ffffff" fill-rule="evenodd"/>
  </g>
</svg>
`;

function createDIB(width, height, rawBuffer) {
  const header = Buffer.alloc(40);
  header.writeUInt32LE(40, 0); // biSize
  header.writeInt32LE(width, 4); // biWidth
  header.writeInt32LE(height * 2, 8); // biHeight (doubled for ICO mask)
  header.writeUInt16LE(1, 12); // biPlanes
  header.writeUInt16LE(32, 14); // biBitCount
  header.writeUInt32LE(0, 16); // biCompression (BI_RGB)
  header.writeUInt32LE(width * height * 4, 20); // biSizeImage
  header.writeInt32LE(0, 24); // biXPelsPerMeter
  header.writeInt32LE(0, 28); // biYPelsPerMeter
  header.writeUInt32LE(0, 32); // biClrUsed
  header.writeUInt32LE(0, 36); // biClrImportant

  const pixelData = Buffer.alloc(width * height * 4);
  for (let y = 0; y < height; y++) {
    const srcY = height - 1 - y; // bottom-to-top
    for (let x = 0; x < width; x++) {
      const srcIdx = (srcY * width + x) * 4;
      const dstIdx = (y * width + x) * 4;
      pixelData[dstIdx + 0] = rawBuffer[srcIdx + 2]; // B
      pixelData[dstIdx + 1] = rawBuffer[srcIdx + 1]; // G
      pixelData[dstIdx + 2] = rawBuffer[srcIdx + 0]; // R
      pixelData[dstIdx + 3] = rawBuffer[srcIdx + 3]; // A
    }
  }

  // 1-bit AND mask (row aligned to 32-bit boundary)
  const rowBytes = Math.ceil(width / 32) * 4;
  const andMask = Buffer.alloc(rowBytes * height, 0);

  return Buffer.concat([header, pixelData, andMask]);
}

async function buildIco(svgBuffer) {
  const sizes = [16, 32, 48, 64];
  const images = [];

  for (const size of sizes) {
    if (size <= 32) {
      const { data } = await sharp(svgBuffer).resize(size, size).raw().toBuffer({ resolveWithObject: true });
      const dib = createDIB(size, size, data);
      images.push({ size, data: dib });
    } else {
      const png = await sharp(svgBuffer).resize(size, size).png().toBuffer();
      images.push({ size, data: png });
    }
  }

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2); // 1 = ICO
  header.writeUInt16LE(images.length, 4);

  let offset = 6 + 16 * images.length;
  const entries = [];
  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.size === 256 ? 0 : img.size, 0);
    entry.writeUInt8(img.size === 256 ? 0 : img.size, 1);
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(img.data.length, 8); // data size
    entry.writeUInt32LE(offset, 12); // data offset
    entries.push(entry);
    offset += img.data.length;
  }

  return Buffer.concat([header, ...entries, ...images.map(i => i.data)]);
}

async function generate() {
  console.log('Generating RedView favicons and icons...');
  const svgBuffer = Buffer.from(SVG_CONTENT, 'utf-8');

  // Build ICO
  const icoBuffer = await buildIco(svgBuffer);
  console.log(`Built ICO (${icoBuffer.length} bytes)`);

  // Build PNGs
  const appleTouchPng = await sharp(svgBuffer).resize(180, 180).png().toBuffer();
  const icon192Png = await sharp(svgBuffer).resize(192, 192).png().toBuffer();
  const icon512Png = await sharp(svgBuffer).resize(512, 512).png().toBuffer();

  // Targets for redview-website
  const websiteFiles = [
    { path: path.join(WEBSITE_DIR, 'src/app/favicon.ico'), data: icoBuffer },
    { path: path.join(WEBSITE_DIR, 'public/favicon.ico'), data: icoBuffer },
    { path: path.join(WEBSITE_DIR, 'public/favicon.svg'), data: svgBuffer },
    { path: path.join(WEBSITE_DIR, 'src/app/icon.svg'), data: svgBuffer },
    { path: path.join(WEBSITE_DIR, 'src/app/apple-icon.svg'), data: svgBuffer },
    { path: path.join(WEBSITE_DIR, 'public/apple-touch-icon.png'), data: appleTouchPng },
    { path: path.join(WEBSITE_DIR, 'public/icon-192.png'), data: icon192Png },
    { path: path.join(WEBSITE_DIR, 'public/icon-512.png'), data: icon512Png },
  ];

  // Targets for redview-app
  const appFiles = [
    { path: path.join(APP_DIR, 'public/favicon.svg'), data: svgBuffer },
    { path: path.join(APP_DIR, 'public/favicon.ico'), data: icoBuffer },
    { path: path.join(APP_DIR, 'public/apple-touch-icon.png'), data: appleTouchPng },
    { path: path.join(APP_DIR, 'public/icon-192.png'), data: icon192Png },
    { path: path.join(APP_DIR, 'public/icon-512.png'), data: icon512Png },
  ];

  for (const file of [...websiteFiles, ...appFiles]) {
    fs.mkdirSync(path.dirname(file.path), { recursive: true });
    fs.writeFileSync(file.path, file.data);
    console.log(`Saved: ${file.path} (${file.data.length} bytes)`);
  }

  console.log('All RedView favicon assets successfully generated!');
}

generate().catch((err) => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
