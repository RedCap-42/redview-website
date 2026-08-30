import { msg } from '@lingui/core/macro';

import { type IllustrationCardRecord } from './three-cards.data';

export const PRODUCT_ILLUSTRATION_CARDS: readonly IllustrationCardRecord[] = [
  {
    heading: msg`Qualité du Terrain & LiDAR 20cm`,
    body: msg`Inspection du sol nu sans végétation pour repérer pierriers, talus et sentiers techniques.`,
    illustration: 'eye',
  },
  {
    heading: msg`Planification & Corridors POI`,
    body: msg`Détection automatisée des fontaines et boulangeries avec simulation exacte de vos temps de passage.`,
    illustration: 'speed',
  },
  {
    heading: msg`Comparaison Multi-Traces`,
    body: msg`Superposition de plusieurs variantes sur la même scène 3D pour comparer dénivelés et chronos.`,
    illustration: 'singleScreen',
  },
];
