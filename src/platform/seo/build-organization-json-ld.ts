import { SITE_URLS } from '@/platform/site-urls';
import { getSiteUrl } from './get-site-url';

export const buildOrganizationJsonLd = (): Record<string, unknown> => {
  const siteUrl = getSiteUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RedView',
    url: siteUrl,
    logo: `${siteUrl}/images/logoredviewofficial.svg`,
    description:
      "Plateforme géospatiale 3D haute résolution (40 cm et LiDAR 20 cm) pour préparer, explorer et sécuriser les aventures outdoor et la reconnaissance de montagne.",
    email: 'redview.app@proton.me',
    founder: [
      {
        '@type': 'Person',
        name: 'Victor Bouscavet',
        jobTitle: "Cofondateur & Designer d'expérience ultra-endurance",
        sameAs: [SITE_URLS.instagramVictor],
      },
      {
        '@type': 'Person',
        name: 'Simon Farina',
        jobTitle: 'Cofondateur & Architecte moteur cartographique 3D',
        sameAs: [SITE_URLS.instagramSimon],
      },
    ],
    sameAs: [
      SITE_URLS.x,
      SITE_URLS.github,
      SITE_URLS.linkedin,
      SITE_URLS.discord,
    ].filter(Boolean),
  };
};
