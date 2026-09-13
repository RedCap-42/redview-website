import { type MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';

// Which animated product scene mounts in the card frame when the mockup
// wave (with AppPreview) lands; until then the gradient backdrop — the
// scene's own bottom layer — fills the frame.
export type FeatureIllustrationId =
  | 'familiar-interface'
  | 'live-data'
  | 'fast-path';

export type FeatureCardRecord = {
  backgroundImageSrc: string;
  body: MessageDescriptor;
  heading: MessageDescriptor;
  icon: 'users-group' | 'live-data' | 'fast-path';
  illustration: FeatureIllustrationId;
};

export const FEATURE_CARDS: readonly FeatureCardRecord[] = [
  {
    heading: msg`Voir le sentier, pas la forêt`,
    body: msg`Sur une carte satellite, le sentier forestier disparaît sous la canopée. Les dalles LiDAR IGN gommées révèlent le sol nu : talus, pierriers, granulométrie du chemin. Vous savez à quoi ressemble le terrain avant d'y poser le pied.`,
    backgroundImageSrc:
      '/images/home/three-cards-feature/familiar-interface-gradient.webp',
    icon: 'users-group',
    illustration: 'familiar-interface',
  },
  {
    heading: msg`Savoir si le col est gelé`,
    body: msg`La neige est recalculée physiquement sur le relief — dépôt sous le vent, érosion des crêtes, regel nocturne — à partir des données Météo-France. Combinée à l'ombre portée, elle vous dit l'état du col à l'heure exacte où vous y passerez.`,
    backgroundImageSrc:
      '/images/home/three-cards-feature/live-data-gradient.webp',
    icon: 'live-data',
    illustration: 'live-data',
  },
  {
    heading: msg`Arriver avant la nuit`,
    body: msg`Votre allure se calcule au watt près : puissance réelle, poids du chargement, pente, revêtement et pauses programmées. Vous partez avec une heure de passage fiable en haut de chaque col, pas une estimation à la louche.`,
    backgroundImageSrc:
      '/images/home/three-cards-feature/fast-path-gradient.webp',
    icon: 'fast-path',
    illustration: 'fast-path',
  },
];
