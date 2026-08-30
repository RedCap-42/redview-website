import { msg } from '@lingui/core/macro';
import {
  IconArticle,
  IconBulb,
  IconTag,
} from '@tabler/icons-react';

import { LATEST_RELEASE } from '@/platform/releases';
import { SITE_URLS } from '@/platform/site-urls';

import { type MenuNavItem } from '../types/menu-nav-item';
import { type MenuSocialLink } from '../types/menu-social-link';

export const MENU: {
  appUrl: string;
  navItems: readonly MenuNavItem[];
  socialLinks: readonly MenuSocialLink[];
} = {
  appUrl: SITE_URLS.appWelcome,
  navItems: [
    {
      label: msg`Ressources`,
      children: [
        {
          label: msg`Pourquoi RedView`,
          description: msg`Terrain, POI & Comparaison de traces`,
          href: '/why-redview',
          icon: IconBulb,
          preview: {
            image: '/images/menu/why.webp',
            imageAlt: msg`Illustration ingénierie et analyse de terrain RedView`,
            imagePosition: 'center',
            title: msg`Pourquoi les explorateurs choisissent RedView`,
            description: msg`Une plateforme 3D d'ingénierie outdoor : analyse de la qualité des surfaces, comparaison multi-traces en direct et calcul prédictif des temps de passage.`,
          },
        },
        {
          label: msg`Blog`,
          description: msg`En cours...`,
          href: '/blog',
          icon: IconArticle,
          preview: {
            image: '/images/menu/developers.webp',
            imageAlt: msg`Blog RedView`,
            imagePosition: 'center',
            imageScale: 1.6,
            title: msg`Blog RedView`,
            description: msg`Section en cours de préparation. Retrouvez prochainement nos analyses techniques, guides et retours d'expérience de terrain.`,
          },
        },
        {
          label: msg`Mises à jour`,
          description: msg`Nouveautés moteurs & cartographie`,
          href: '/releases',
          icon: IconTag,
          preview: {
            image: LATEST_RELEASE.previewImage,
            imageAlt: msg`Notes de version RedView ${LATEST_RELEASE.release} — ${LATEST_RELEASE.title}`,
            imageScale: 1.04,
            title: msg`Dernières avancées : version ${LATEST_RELEASE.release}`,
            description: msg`Suivez les évolutions : comparateur de traces instantané, moteur Climb-Seeker Best-of-N et détection avancée de la praticabilité du sol.`,
          },
        },
      ],
    },
    { href: '/customers', label: msg`Fonctionnalités` },
    { href: '/pricing', label: msg`Tarifs` },
  ],
  socialLinks: [],
};
