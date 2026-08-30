import { paletteColorNumber } from '@/tokens';

import { type HalftoneImageBackdropProps } from '@/platform/visuals/rigs/HalftoneImageBackdrop';

// The mountain framing per viewport band
const FRAME_TUNES: Array<{
  maxWidthPx: number;
  previewDistance: number;
  verticalAnchor: number;
  verticalOffsetPx: number;
  horizontalOffsetPx: number;
  imageFit: 'contain' | 'cover' | 'width';
}> = [
  {
    maxWidthPx: 767,
    previewDistance: 1.25,
    verticalAnchor: 0.5,
    verticalOffsetPx: 30,
    horizontalOffsetPx: 0,
    imageFit: 'cover',
  },
  {
    maxWidthPx: 1199,
    previewDistance: 1.8,
    verticalAnchor: 0.5,
    verticalOffsetPx: 45,
    horizontalOffsetPx: 0,
    imageFit: 'cover',
  },
  {
    maxWidthPx: Number.POSITIVE_INFINITY,
    previewDistance: 3.2,
    verticalAnchor: 0.5,
    verticalOffsetPx: 60,
    horizontalOffsetPx: 0,
    imageFit: 'width',
  },
];

function resolveFrameTune() {
  const viewportWidth =
    typeof window === 'undefined'
      ? Number.POSITIVE_INFINITY
      : window.innerWidth;
  const tune =
    FRAME_TUNES.find((candidate) => viewportWidth <= candidate.maxWidthPx) ??
    FRAME_TUNES[FRAME_TUNES.length - 1];
  return {
    previewDistance: tune.previewDistance,
    verticalAnchor: tune.verticalAnchor,
    verticalOffsetPx: tune.verticalOffsetPx,
    horizontalOffsetPx: tune.horizontalOffsetPx,
    imageFit: tune.imageFit,
  };
}

// The hero mountain: high-definition detailed dashes styling
export const HERO_BACKDROP: Pick<
  HalftoneImageBackdropProps,
  'imageUrl' | 'settings'
> = {
  imageUrl: '/images/home/hero-mountain-2.png',
  settings: {
    previewDistance: 3.2,
    imageFit: 'width',
    verticalAnchor: 0.5,
    applyToDarkAreas: true,
    contrast: 1.2,
    halftone: {
      scale: 24,
      power: -0.05,
      width: 0.34,
      minimumTone: 0,
      dashColor: paletteColorNumber('blue'),
      hoverDashColor: paletteColorNumber('blue'),
    },
    hover: {
      halftoneEnabled: false,
      halftonePowerShift: 0,
      halftoneRadius: 0.6,
      halftoneWidthShift: 0,
      lightEnabled: true,
      lightIntensity: 0.8,
      lightRadius: 0.14,
      lightVerticalFade: 0.5,
      fadeIn: 18,
      fadeOut: 7,
    },
    pointer: {
      follow: 0.38,
      velocityDamping: 0.82,
    },
    wave: {
      enabled: false,
      amount: 0,
      speed: 1,
    },
    responsiveFrame: resolveFrameTune,
    pointerExcludeSelector: '[data-halftone-exclude]',
    pointerScope: 'window',
  },
};
