import { getSiteUrl } from './get-site-url';

export const buildWebSiteJsonLd = (): Record<string, unknown> => {
  const siteUrl = getSiteUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'RedView',
    url: siteUrl,
    inLanguage: 'fr-FR',
    description:
      "La plateforme 3D d'ingénierie et d'exploration outdoor : relief 40 cm, LiDAR 20 cm et analyse de traces GPX.",
  };
};
