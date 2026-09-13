import { type MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';

import { SITE_URLS } from '@/platform/site-urls';
import { type PlansHostingMode } from '@/pricing-state';

export type PlansBillingPeriod = 'monthly' | 'yearly';
export type PlansTierId = 'enterprise' | 'organization' | 'pro';

export type PlanPrice = {
  prefix: string;
  suffix: MessageDescriptor;
  value: number;
  valueSuffix?: string;
};

type PlansTierCell = {
  featureBullets: MessageDescriptor[];
  price: PlanPrice;
};

type PlansTierCta = {
  href?: string;
  label: MessageDescriptor;
};

type PlansTier = {
  cells: Record<PlansHostingMode, Record<PlansBillingPeriod, PlansTierCell>>;
  cta: Record<PlansHostingMode, Record<PlansBillingPeriod, PlansTierCta>>;
  heading: Record<PlansHostingMode, MessageDescriptor>;
  icon: { alt: string; src: string; widthPx?: number };
};

const appBaseUrl = SITE_URLS.appWelcome.replace(/\/$/, '');
const founderCheckoutUrl = `${appBaseUrl}/?tab=subscription&tier=founder`;
const patronCheckoutUrl = `${appBaseUrl}/?tab=subscription&tier=patron`;

const FREE_BULLETS = [
  msg`Moteur 3D LiDAR haute précision (accès illimité web)`,
  msg`Simulations météo, vent, ensoleillement & neige`,
  msg`Routage intelligent, profil altimétrique & export GPX`,
  msg`Accès immédiat et complet sans carte bancaire`,
];

const FOUNDER_BULLETS = [
  msg`Tous les accès et fonctionnalités de la Bêta Web inclus`,
  msg`Accès Bêta prioritaire à la future application mobile iOS (TestFlight)`,
  msg`Droit de vote sur les prochains massifs 3D modélisés (LiDAR HD)`,
  msg`Badge officiel Membre Fondateur sur votre profil et traces publiques`,
  msg`Paiement unique de 5 € · Soutien au développement indépendant`,
];

const PATRON_BULLETS = [
  msg`Tous les privilèges du Pass Fondateur inclus`,
  msg`Accès Bêta iOS TestFlight VIP (dès les premières builds Alpha)`,
  msg`3 mois de compte RedView PRO offerts dès la sortie de la v1`,
  msg`Parrainage de massif : proposez une zone prioritaire à modéliser`,
  msg`Votre nom ou pseudo gravé au Panthéon officiel des Mécènes`,
  msg`Contact direct avec l'équipe pour co-construire les fonctionnalités`,
];

export const PLANS_DATA: Record<PlansTierId, PlansTier> = {
  pro: {
    cells: {
      cloud: {
        monthly: {
          featureBullets: FREE_BULLETS,
          price: { value: 0, prefix: '', valueSuffix: ' €', suffix: msg`/ gratuit sur le web pendant la Bêta` },
        },
        yearly: {
          featureBullets: FREE_BULLETS,
          price: { value: 0, prefix: '', valueSuffix: ' €', suffix: msg`/ gratuit sur le web pendant la Bêta` },
        },
      },
      selfHost: {
        monthly: {
          featureBullets: FREE_BULLETS,
          price: { value: 0, prefix: '', valueSuffix: ' €', suffix: msg`/ gratuit sur le web pendant la Bêta` },
        },
        yearly: {
          featureBullets: FREE_BULLETS,
          price: { value: 0, prefix: '', valueSuffix: ' €', suffix: msg`/ gratuit sur le web pendant la Bêta` },
        },
      },
    },
    cta: {
      cloud: {
        monthly: {
          href: SITE_URLS.appWelcome,
          label: msg`Lancer l'exploration Web (0€)`,
        },
        yearly: {
          href: SITE_URLS.appWelcome,
          label: msg`Lancer l'exploration Web (0€)`,
        },
      },
      selfHost: {
        monthly: {
          href: SITE_URLS.appWelcome,
          label: msg`Lancer l'exploration Web (0€)`,
        },
        yearly: {
          href: SITE_URLS.appWelcome,
          label: msg`Lancer l'exploration Web (0€)`,
        },
      },
    },
    heading: { cloud: msg`Accès Bêta Web`, selfHost: msg`Accès Bêta Web` },
    icon: {
      alt: 'Icône accès gratuit',
      src: '/images/pricing/plans/pro-icon.webp',
      widthPx: 60,
    },
  },
  organization: {
    cells: {
      cloud: {
        monthly: {
          featureBullets: FOUNDER_BULLETS,
          price: { value: 5, prefix: '', valueSuffix: ' €', suffix: msg`/ paiement unique · avantages à vie` },
        },
        yearly: {
          featureBullets: FOUNDER_BULLETS,
          price: { value: 5, prefix: '', valueSuffix: ' €', suffix: msg`/ paiement unique · avantages à vie` },
        },
      },
      selfHost: {
        monthly: {
          featureBullets: FOUNDER_BULLETS,
          price: { value: 5, prefix: '', valueSuffix: ' €', suffix: msg`/ paiement unique · avantages à vie` },
        },
        yearly: {
          featureBullets: FOUNDER_BULLETS,
          price: { value: 5, prefix: '', valueSuffix: ' €', suffix: msg`/ paiement unique · avantages à vie` },
        },
      },
    },
    cta: {
      cloud: {
        monthly: {
          href: founderCheckoutUrl,
          label: msg`Devenir Membre Fondateur (5€)`,
        },
        yearly: {
          href: founderCheckoutUrl,
          label: msg`Devenir Membre Fondateur (5€)`,
        },
      },
      selfHost: {
        monthly: {
          href: founderCheckoutUrl,
          label: msg`Devenir Membre Fondateur (5€)`,
        },
        yearly: {
          href: founderCheckoutUrl,
          label: msg`Devenir Membre Fondateur (5€)`,
        },
      },
    },
    heading: { cloud: msg`Pass Fondateur`, selfHost: msg`Pass Fondateur` },
    icon: {
      alt: 'Icône pass fondateur',
      src: '/images/pricing/plans/organization-icon.webp',
    },
  },
  enterprise: {
    cells: {
      cloud: {
        monthly: {
          featureBullets: PATRON_BULLETS,
          price: { value: 15, prefix: 'dès ', valueSuffix: ' €', suffix: msg`/ don libre de soutien` },
        },
        yearly: {
          featureBullets: PATRON_BULLETS,
          price: { value: 15, prefix: 'dès ', valueSuffix: ' €', suffix: msg`/ don libre de soutien` },
        },
      },
      selfHost: {
        monthly: {
          featureBullets: PATRON_BULLETS,
          price: { value: 15, prefix: 'dès ', valueSuffix: ' €', suffix: msg`/ don libre de soutien` },
        },
        yearly: {
          featureBullets: PATRON_BULLETS,
          price: { value: 15, prefix: 'dès ', valueSuffix: ' €', suffix: msg`/ don libre de soutien` },
        },
      },
    },
    cta: {
      cloud: {
        monthly: {
          href: patronCheckoutUrl,
          label: msg`Devenir Mécène (dès 15€)`,
        },
        yearly: {
          href: patronCheckoutUrl,
          label: msg`Devenir Mécène (dès 15€)`,
        },
      },
      selfHost: {
        monthly: {
          href: patronCheckoutUrl,
          label: msg`Devenir Mécène (dès 15€)`,
        },
        yearly: {
          href: patronCheckoutUrl,
          label: msg`Devenir Mécène (dès 15€)`,
        },
      },
    },
    heading: { cloud: msg`Mécène & Soutien Majeur`, selfHost: msg`Mécène & Soutien Majeur` },
    icon: {
      alt: 'Icône mécène don libre',
      src: '/images/pricing/plans/enterprise-icon.webp',
    },
  },
};
