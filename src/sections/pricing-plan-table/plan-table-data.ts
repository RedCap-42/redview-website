import { msg } from '@lingui/core/macro';

import { type PlanTableDataType } from './plan-table-types';

export const PLAN_TABLE_DATA: PlanTableDataType = {
  featureColumnLabel: msg`Fonctionnalités & Avantages`,
  initialVisibleRowCount: 14,
  seeMoreFeaturesCta: {
    collapseLabel: msg`Voir moins de détails`,
    expandLabel: msg`Voir toutes les fonctionnalités & privilèges`,
  },
  tierColumns: [
    {
      id: 'pro',
      label: { cloud: msg`Accès Bêta Web`, selfHost: msg`Accès Bêta Web` },
    },
    {
      id: 'organization',
      label: { cloud: msg`Pass Fondateur`, selfHost: msg`Pass Fondateur` },
    },
    {
      id: 'enterprise',
      label: { cloud: msg`Mécène & Soutien Majeur`, selfHost: msg`Mécène & Soutien Majeur` },
    },
  ],
  rows: [
    {
      featureLabel: msg`Contribution`,
      selfHostTiers: {
        enterprise: { kind: 'text', text: msg`Dès 30€ (Don libre)` },
        organization: { kind: 'text', text: msg`10€ (Paiement unique)` },
        pro: { kind: 'text', text: msg`0€ (Gratuit Bêta)` },
      },
      tiers: {
        enterprise: { kind: 'text', text: msg`Dès 30€ (Don libre)` },
        organization: { kind: 'text', text: msg`10€ (Paiement unique)` },
        pro: { kind: 'text', text: msg`0€ (Gratuit Bêta)` },
      },
      type: 'row',
    },
    { title: msg`Privilèges Fondateurs & Accès Mobile`, type: 'category' },
    {
      featureLabel: msg`Accès Prioritaire Bêta Mobile (iOS TestFlight & Android)`,
      tiers: {
        enterprise: { kind: 'yes', label: msg`Accès VIP Immédiat` },
        organization: { kind: 'yes', label: msg`Accès Prioritaire` },
        pro: { kind: 'dash' },
      },
      type: 'row',
    },
    {
      featureLabel: msg`Statut Fondateur (-50% à vie sur l'abonnement Pro)`,
      tiers: {
        enterprise: { kind: 'yes', label: msg`Garanti à vie` },
        organization: { kind: 'yes', label: msg`Garanti à vie` },
        pro: { kind: 'dash' },
      },
      type: 'row',
    },
    {
      featureLabel: msg`Droit de vote sur les prochains massifs 3D modélisés`,
      tiers: {
        enterprise: { kind: 'yes', label: msg`Priorité Vote` },
        organization: { kind: 'yes', label: msg`Inclus` },
        pro: { kind: 'dash' },
      },
      type: 'row',
    },
    {
      featureLabel: msg`1 An de compte PRO offert au lancement public`,
      tiers: {
        enterprise: { kind: 'yes', label: msg`Offert (1 an)` },
        organization: { kind: 'dash' },
        pro: { kind: 'dash' },
      },
      type: 'row',
    },
    {
      featureLabel: msg`Salon Discord privé & contact direct avec le développeur`,
      tiers: {
        enterprise: { kind: 'yes', label: msg`Contact Direct` },
        organization: { kind: 'yes', label: msg`Inclus` },
        pro: { kind: 'dash' },
      },
      type: 'row',
    },
    {
      featureLabel: msg`Votre nom ou pseudo sur la page officielle des Soutiens`,
      tiers: {
        enterprise: { kind: 'text', text: msg`Tableau d'Honneur` },
        organization: { kind: 'text', text: msg`Mur des Fondateurs` },
        pro: { kind: 'dash' },
      },
      type: 'row',
    },
    {
      featureLabel: msg`Accès prioritaire aux nouvelles MAJ (Early Access)`,
      tiers: {
        enterprise: { kind: 'text', text: msg`Accès Anticipé VIP` },
        organization: { kind: 'text', text: msg`Accès Anticipé Bêta` },
        pro: { kind: 'text', text: msg`Mises à jour standard` },
      },
      type: 'row',
    },
    { title: msg`Moteur 3D & Cartographie Web (100% Inclus pendant la Bêta)`, type: 'category' },
    {
      featureLabel: msg`Résolution d'élévation 3D`,
      tiers: {
        enterprise: { kind: 'text', text: msg`40 cm (HD)` },
        organization: { kind: 'text', text: msg`40 cm (HD)` },
        pro: { kind: 'text', text: msg`40 cm (HD)` },
      },
      type: 'row',
    },
    {
      featureLabel: msg`Visualisateur LiDAR brut du sol`,
      tiers: {
        enterprise: { kind: 'text', text: msg`20 cm` },
        organization: { kind: 'text', text: msg`20 cm` },
        pro: { kind: 'text', text: msg`20 cm` },
      },
      type: 'row',
    },
    {
      featureLabel: msg`Analyse des pentes et inclinaisons`,
      tiers: {
        enterprise: { kind: 'yes', label: msg`Inclus` },
        organization: { kind: 'yes', label: msg`Inclus` },
        pro: { kind: 'yes', label: msg`Inclus` },
      },
      type: 'row',
    },
    {
      featureLabel: msg`Affichage par paliers d'altitude`,
      tiers: {
        enterprise: { kind: 'yes', label: msg`Inclus` },
        organization: { kind: 'yes', label: msg`Inclus` },
        pro: { kind: 'yes', label: msg`Inclus` },
      },
      type: 'row',
    },
    {
      featureLabel: msg`Simulation ensoleillement & ombres`,
      tiers: {
        enterprise: { kind: 'yes', label: msg`Inclus` },
        organization: { kind: 'yes', label: msg`Inclus` },
        pro: { kind: 'yes', label: msg`Inclus` },
      },
      type: 'row',
    },
    {
      featureLabel: msg`Prévisions météo & historiques`,
      tiers: {
        enterprise: { kind: 'yes', label: msg`Inclus` },
        organization: { kind: 'yes', label: msg`Inclus` },
        pro: { kind: 'yes', label: msg`Inclus` },
      },
      type: 'row',
    },
    {
      featureLabel: msg`Cartographie flux de vent animés`,
      tiers: {
        enterprise: { kind: 'yes', label: msg`Inclus` },
        organization: { kind: 'yes', label: msg`Inclus` },
        pro: { kind: 'yes', label: msg`Inclus` },
      },
      type: 'row',
    },
    {
      featureLabel: msg`Modélisation de l'enneigement 1km`,
      tiers: {
        enterprise: { kind: 'yes', label: msg`Inclus` },
        organization: { kind: 'yes', label: msg`Inclus` },
        pro: { kind: 'yes', label: msg`Inclus` },
      },
      type: 'row',
    },
    {
      featureLabel: msg`Moteur d'itinéraire personnalisé`,
      tiers: {
        enterprise: { kind: 'yes', label: msg`Inclus` },
        organization: { kind: 'yes', label: msg`Inclus` },
        pro: { kind: 'yes', label: msg`Inclus` },
      },
      type: 'row',
    },
    {
      featureLabel: msg`Comparateur de variantes multi-traces`,
      tiers: {
        enterprise: { kind: 'yes', label: msg`Inclus` },
        organization: { kind: 'yes', label: msg`Inclus` },
        pro: { kind: 'yes', label: msg`Inclus` },
      },
      type: 'row',
    },
    {
      featureLabel: msg`Import & Export GPX / KML`,
      tiers: {
        enterprise: { kind: 'text', text: msg`Illimité` },
        organization: { kind: 'text', text: msg`Illimité` },
        pro: { kind: 'text', text: msg`Illimité` },
      },
      type: 'row',
    },
  ],
};
