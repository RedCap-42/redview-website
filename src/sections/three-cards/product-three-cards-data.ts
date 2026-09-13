import { msg } from '@lingui/core/macro';

import { type IllustrationCardRecord } from './three-cards.data';

export const PRODUCT_ILLUSTRATION_CARDS: readonly IllustrationCardRecord[] = [
  {
    heading: msg`Le sol, sans la végétation`,
    body: msg`Les dalles LiDAR 20 cm sont gommées de leur canopée. Vous voyez le pierrier, le talus et la granulométrie du chemin — pas une tache verte uniforme.`,
    illustration: 'eye',
  },
  {
    heading: msg`De l'eau au kilomètre 62`,
    body: msg`Le corridor de POI scanne 50 à 500 m de part et d'autre de votre trace et vous dit où sont les fontaines, refuges et ravitaillements, avec l'heure à laquelle vous y passerez.`,
    illustration: 'speed',
  },
  {
    heading: msg`Deux variantes, une décision`,
    body: msg`Superposez vos options dans la même scène 3D et comparez d'un regard le dénivelé, la part de sentier et le chrono prédictif de chacune.`,
    illustration: 'singleScreen',
  },
];
