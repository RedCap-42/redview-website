import { SITE_URLS } from '@/platform/site-urls';
import { getSiteUrl } from './get-site-url';

export const buildSoftwareApplicationJsonLd = (): Record<string, unknown> => {
  const siteUrl = getSiteUrl();

  return {
    '@context': 'https://schema.org',
    '@type': ['SoftwareApplication', 'WebApplication'],
    name: 'RedView 3D',
    alternateName: 'RedView Geospatial 3D',
    applicationCategory: 'GeographicInformationSystemApplication',
    operatingSystem: 'All (Web Browser with WebGL/WebGPU)',
    url: siteUrl,
    image: `${siteUrl}/images/features/40cmdem.png`,
    description:
      "Visualisateur cartographique 3D haute résolution (MNT submétrique 40 cm et LiDAR 20 cm) pour l'analyse de traces GPX, de pentes, d'exposition solaire et de météo de montagne.",
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      description: 'Accès 100% gratuit pendant la phase de financement participatif.',
    },
    featureList: [
      'Relief d’élévation 3D submétrique à 40 cm',
      'Visualisateur LiDAR 20 cm avec suppression de la végétation',
      'Simulation astronomique d’ensoleillement et ombres portées',
      'Flux météo vectoriels et nivologie physique Météo France en direct',
      'Import, export et comparaison multi-traces GPX / KML',
      'Calculateur de dénivelé et profil altimétrique prédictif',
      'Moteur WebGL/WebGPU 60 FPS sans installation',
    ],
    browserRequirements: 'Requires JavaScript and WebGL/WebGPU support.',
    author: {
      '@type': 'Organization',
      name: 'RedView',
      url: siteUrl,
    },
    installUrl: SITE_URLS.appWelcome,
  };
};
