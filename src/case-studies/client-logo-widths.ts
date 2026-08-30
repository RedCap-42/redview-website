import { type ClientLogoKey } from './client-logo-config';

// How wide each customer logo renders at its base size. The catalog thumbnail
// and the detail hero both scale from these (×1.4 and ×1.6 respectively).
export const CLIENT_LOGO_DISPLAY_WIDTHS: Record<ClientLogoKey, number> = {
  'nine-dots': 72,
  'alternative-partners': 220,
  netzero: 180,
  'act-education': 110,
  w3villa: 150,
  'elevate-consulting': 160,
  '3d-40cm': 120,
  'lidar-20cm': 130,
  'slope-analysis': 150,
  'altitude-steps': 120,
  'sun-shadows': 130,
  'weather-history': 150,
  'wind-flow': 130,
  'snow-model': 140,
  'custom-routing': 120,
  'compare-routes': 130,
};
