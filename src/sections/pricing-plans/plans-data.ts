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

const FREE_BULLETS = [
  msg`Moteur 3D & LiDAR 20 cm illimités sur le web`,
  msg`Simulation météo, vent, ensoleillement & neige`,
  msg`Routage intelligent & export GPX illimité`,
  msg`Accès complet sans carte bancaire`,
];

const FOUNDER_BULLETS = [
  msg`Tout l'Accès Web Bêta inclus`,
  msg`Accès prioritaire à la future App Mobile (iOS TestFlight & Android)`,
  msg`Statut Fondateur : -50% à vie sur les futurs abonnements`,
  msg`Droit de vote sur les prochains massifs 3D modélisés`,
  msg`Salon Discord privé & échanges directs avec le développeur`,
  msg`Soutenez directement le développement indépendant`,
];

const PATRON_BULLETS = [
  msg`Tous les privilèges du Pass Fondateur inclus`,
  msg`1 An de compte PRO offert au lancement de la v1`,
  msg`Accès VIP ultra-prioritaire aux premières versions mobiles`,
  msg`Votre nom ou pseudo sur la page officielle des Soutiens`,
  msg`Contact direct pour proposer de nouvelles zones ou fonctionnalités`,
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
          price: { value: 5, prefix: '', valueSuffix: ' €', suffix: msg`/ par mois (soutien libre)` },
        },
        yearly: {
          featureBullets: FOUNDER_BULLETS,
          price: { value: 10, prefix: '', valueSuffix: ' €', suffix: msg`/ paiement unique · avantages à vie` },
        },
      },
      selfHost: {
        monthly: {
          featureBullets: FOUNDER_BULLETS,
          price: { value: 5, prefix: '', valueSuffix: ' €', suffix: msg`/ par mois (soutien libre)` },
        },
        yearly: {
          featureBullets: FOUNDER_BULLETS,
          price: { value: 10, prefix: '', valueSuffix: ' €', suffix: msg`/ paiement unique · avantages à vie` },
        },
      },
    },
    cta: {
      cloud: {
        monthly: {
          href: SITE_URLS.appWelcome,
          label: msg`Devenir Membre Fondateur (5€/mois)`,
        },
        yearly: {
          href: SITE_URLS.appWelcome,
          label: msg`Devenir Membre Fondateur (10€)`,
        },
      },
      selfHost: {
        monthly: {
          href: SITE_URLS.appWelcome,
          label: msg`Devenir Membre Fondateur (5€/mois)`,
        },
        yearly: {
          href: SITE_URLS.appWelcome,
          label: msg`Devenir Membre Fondateur (10€)`,
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
          price: { value: 15, prefix: 'dès ', valueSuffix: ' €', suffix: msg`/ par mois (soutien pro)` },
        },
        yearly: {
          featureBullets: PATRON_BULLETS,
          price: { value: 30, prefix: 'dès ', valueSuffix: ' €', suffix: msg`/ don libre de soutien` },
        },
      },
      selfHost: {
        monthly: {
          featureBullets: PATRON_BULLETS,
          price: { value: 15, prefix: 'dès ', valueSuffix: ' €', suffix: msg`/ par mois (soutien pro)` },
        },
        yearly: {
          featureBullets: PATRON_BULLETS,
          price: { value: 30, prefix: 'dès ', valueSuffix: ' €', suffix: msg`/ don libre de soutien` },
        },
      },
    },
    cta: {
      cloud: {
        monthly: {
          href: SITE_URLS.appWelcome,
          label: msg`Devenir Mécène (15€/mois)`,
        },
        yearly: {
          href: SITE_URLS.appWelcome,
          label: msg`Devenir Mécène (dès 30€)`,
        },
      },
      selfHost: {
        monthly: {
          href: SITE_URLS.appWelcome,
          label: msg`Devenir Mécène (15€/mois)`,
        },
        yearly: {
          href: SITE_URLS.appWelcome,
          label: msg`Devenir Mécène (dès 30€)`,
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
