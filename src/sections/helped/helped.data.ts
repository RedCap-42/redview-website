import { type MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';

export type HelpedVisualId = 'target' | 'spaceship' | 'eye';

export type HelpedCardRecord = {
  body: MessageDescriptor;
  heading: MessageDescriptor;
  href: string;
  illustration: HelpedVisualId;
  wordmark: string;
};

export const HELPED_CARDS: readonly HelpedCardRecord[] = [
  {
    wordmark: 'Rythme & FTP',
    heading: msg`Pacing prédictif & calcul d'effort`,
    body: msg`Estimez votre heure d'arrivée et vos dépenses énergétiques au Watt près selon votre puissance cible et le poids de votre vélo.`,
    illustration: 'target',
    href: '/customers/moteur-itineraire-personnalise',
  },
  {
    wordmark: 'LiDAR 20cm',
    heading: msg`Résolution LiDAR 20cm & Neige temps réel`,
    body: msg`Visualisez le relief brut à 20cm sous la canopée et suivez l'enneigement en temps réel pour sécuriser les itinéraires des pros de la montagne.`,
    illustration: 'eye',
    href: '/customers/visualisateur-lidar',
  },
  {
    wordmark: 'Buffer 40m',
    heading: msg`Détection de POIs sur votre trace`,
    body: msg`Filtrez instantanément les points d'eau, boulangeries et refuges situés sur votre itinéraire avec calcul automatique des temps de pause.`,
    illustration: 'spaceship',
    href: '/customers/moteur-itineraire-personnalise',
  },
];
