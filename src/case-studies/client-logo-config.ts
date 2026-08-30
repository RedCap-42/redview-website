// The customer wordmarks shown on each case-study card. The old site shipped
// five near-identical SVG files; here they are one config-driven component
// (client-logo.tsx) plus the dotted Nine Dots mark. viewBox height is always
// 22 for wordmarks; the dots mark is a fixed 56x56 grid.
export type ClientLogoKey =
  | 'nine-dots'
  | 'alternative-partners'
  | 'netzero'
  | 'act-education'
  | 'w3villa'
  | 'elevate-consulting'
  | '3d-40cm'
  | 'lidar-20cm'
  | 'slope-analysis'
  | 'altitude-steps'
  | 'sun-shadows'
  | 'weather-history'
  | 'wind-flow'
  | 'snow-model'
  | 'custom-routing'
  | 'compare-routes';

type ClientWordmark = {
  kind: 'wordmark';
  text: string;
  viewBoxWidth: number;
  fontSizePx: number;
  letterSpacing: string;
};

type ClientDotsMark = { kind: 'dots' };

export type ClientLogoDefinition = ClientWordmark | ClientDotsMark;

export const CLIENT_LOGOS: Record<ClientLogoKey, ClientLogoDefinition> = {
  'nine-dots': { kind: 'dots' },
  'alternative-partners': {
    kind: 'wordmark',
    text: 'Alternative',
    viewBoxWidth: 132,
    fontSizePx: 13,
    letterSpacing: '-0.02em',
  },
  netzero: {
    kind: 'wordmark',
    text: 'NetZero',
    viewBoxWidth: 100,
    fontSizePx: 15,
    letterSpacing: '-0.02em',
  },
  'act-education': {
    kind: 'wordmark',
    text: 'AC&T',
    viewBoxWidth: 52,
    fontSizePx: 15,
    letterSpacing: '-0.04em',
  },
  w3villa: {
    kind: 'wordmark',
    text: 'W3villa',
    viewBoxWidth: 76,
    fontSizePx: 15,
    letterSpacing: '-0.02em',
  },
  'elevate-consulting': {
    kind: 'wordmark',
    text: 'Elevate',
    viewBoxWidth: 88,
    fontSizePx: 16,
    letterSpacing: '-0.03em',
  },
  '3d-40cm': {
    kind: 'wordmark',
    text: '40cm 3D',
    viewBoxWidth: 92,
    fontSizePx: 14,
    letterSpacing: '-0.02em',
  },
  'lidar-20cm': {
    kind: 'wordmark',
    text: 'LiDAR 20cm',
    viewBoxWidth: 112,
    fontSizePx: 14,
    letterSpacing: '-0.02em',
  },
  'slope-analysis': {
    kind: 'wordmark',
    text: 'Pentes & Relief',
    viewBoxWidth: 132,
    fontSizePx: 14,
    letterSpacing: '-0.02em',
  },
  'altitude-steps': {
    kind: 'wordmark',
    text: 'Altitude HD',
    viewBoxWidth: 102,
    fontSizePx: 14,
    letterSpacing: '-0.02em',
  },
  'sun-shadows': {
    kind: 'wordmark',
    text: 'Solaire 3D',
    viewBoxWidth: 98,
    fontSizePx: 14,
    letterSpacing: '-0.02em',
  },
  'weather-history': {
    kind: 'wordmark',
    text: 'Météo & Climat',
    viewBoxWidth: 126,
    fontSizePx: 14,
    letterSpacing: '-0.02em',
  },
  'wind-flow': {
    kind: 'wordmark',
    text: 'Flux de Vent',
    viewBoxWidth: 114,
    fontSizePx: 14,
    letterSpacing: '-0.02em',
  },
  'snow-model': {
    kind: 'wordmark',
    text: 'Nivologie 1km',
    viewBoxWidth: 122,
    fontSizePx: 14,
    letterSpacing: '-0.02em',
  },
  'custom-routing': {
    kind: 'wordmark',
    text: 'Routage IA',
    viewBoxWidth: 104,
    fontSizePx: 14,
    letterSpacing: '-0.02em',
  },
  'compare-routes': {
    kind: 'wordmark',
    text: 'Multi-Traces',
    viewBoxWidth: 114,
    fontSizePx: 14,
    letterSpacing: '-0.02em',
  },
};
