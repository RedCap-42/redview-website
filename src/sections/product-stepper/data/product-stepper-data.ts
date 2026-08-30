import { msg } from '@lingui/core/macro';

import { type ProductStepperStep } from '../types/product-stepper-step';

export const PRODUCT_STEPPER_STEPS: readonly ProductStepperStep[] = [
  {
    icon: 'eye',
    heading: msg`Qualité du Terrain & Surfaces`,
    body: msg`LiDAR 20cm sans végétation et 8 types de revêtements`,
    visual: 'dataModel',
  },
  {
    icon: 'check',
    heading: msg`Planification & Estimation de Temps`,
    body: msg`Corridors de POI (eau, nourriture) & calcul d'ETA`,
    visual: 'workflow',
  },
  {
    icon: 'users',
    heading: msg`Comparaison Multi-Traces`,
    body: msg`Superposition de variantes sur une seule scène 3D`,
    visual: 'layout',
  },
];
