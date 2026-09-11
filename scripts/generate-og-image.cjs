const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const REDVIEW_MARK_PATH =
  'M19.4062 0C30.1245 4.68511e-07 38.8135 8.68894 38.8135 19.4072C38.8134 30.1255 30.1245 38.8145 19.4062 38.8145H0V19.4072C4.68499e-07 8.68922 8.68835 0.000449258 19.4062 0ZM18.3975 9.5752C16.4695 6.89461 13.0946 6.02423 10.8594 7.63184C8.62427 9.23948 8.37583 12.7159 10.3037 15.3965C10.6901 15.9337 11.1354 16.3968 11.6172 16.7832C8.02224 19.2662 5.54738 23.1551 5.85449 28.0723C10.6499 41.0727 34.9963 36.8349 32.8154 20.3682C30.9355 16.1664 27.0222 14.0922 22.7451 13.7637C24.6583 14.907 25.9403 16.9979 25.9404 19.3887C25.9403 23.0056 23.0075 25.9373 19.3906 25.9375C15.7739 25.9371 12.8419 23.0055 12.8418 19.3887C12.8418 18.7932 12.9223 18.2164 13.0713 17.668C14.6945 18.3774 16.4797 18.3195 17.8418 17.3398C20.077 15.7322 20.3253 12.2558 18.3975 9.5752Z';

async function generateOgImages() {
  const size = 120;
  const svg = Buffer.from(
    `<svg width="${size}" height="${size}" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">` +
    `<path clip-rule="evenodd" fill-rule="evenodd" d="${REDVIEW_MARK_PATH}" fill="#ffffff"/>` +
    `</svg>`
  );

  const buffer = await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 20, g: 20, b: 20, alpha: 1 } // #141414 dark grey
    }
  })
  .composite([
    {
      input: svg,
      gravity: 'center'
    }
  ])
  .png({ compressionLevel: 9 })
  .toBuffer();

  const destinations = [
    // redview-website
    path.resolve(__dirname, '../public/images/og/redview-preview.png'),
    path.resolve(__dirname, '../public/images/og/default.png'),
    // redview-app
    path.resolve(__dirname, '../../redview-app/public/og-image.png'),
    path.resolve(__dirname, '../../redview-app/public/images/og/redview-preview.png')
  ];

  for (const dest of destinations) {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dest, buffer);
    console.log('Written:', dest, `(${buffer.length} bytes)`);
  }
}

generateOgImages().catch((err) => {
  console.error(err);
  process.exit(1);
});
