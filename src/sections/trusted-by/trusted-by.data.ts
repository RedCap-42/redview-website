export type TechLogo = {
  name: string;
  src: string;
  aspectRatio: number;
  heightPx: number;
  grayBrightness?: number;
  grayOpacity?: number;
};

export const TECH_LOGOS: readonly TechLogo[] = [
  {
    aspectRatio: 4.444,
    grayOpacity: 0.75,
    heightPx: 22,
    name: 'Mapbox GL 3D',
    src: '/images/tech-stack/Mapbox_logo_2019.svg',
  },
  {
    aspectRatio: 1,
    grayOpacity: 0.8,
    heightPx: 26,
    name: 'WebGPU',
    src: '/images/tech-stack/webgpu.svg',
  },
  {
    aspectRatio: 1,
    grayOpacity: 0.8,
    heightPx: 26,
    name: 'Rust & WebAssembly',
    src: '/images/tech-stack/rust.svg',
  },
  {
    aspectRatio: 3.321,
    grayOpacity: 0.72,
    heightPx: 22,
    name: 'IGN (Institut national de l\'information géographique)',
    src: '/images/tech-stack/IGN_logo.svg',
  },
  {
    aspectRatio: 0.903,
    grayOpacity: 0.78,
    heightPx: 26,
    name: 'Swisstopo',
    src: '/images/tech-stack/swiss.svg',
  },
  {
    aspectRatio: 3.714,
    grayOpacity: 0.75,
    heightPx: 20,
    name: 'Garmin FIT SDK',
    src: '/images/tech-stack/garmin.svg',
  },
];
