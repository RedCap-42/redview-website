import { paletteColorNumber } from '@/tokens';

import { type HalftoneModelProps } from '@/platform/visuals/rigs/HalftoneModel';

// The /why-redview hero visual: "eye" model rendered with solid band halftone
// recoloured to a white dash that shifts to brand blue on hover, with auto-rotate + drag.
export const WHY_REDVIEW_HERO: Pick<
  HalftoneModelProps,
  'modelUrl' | 'settings' | 'initialPose'
> = {
  modelUrl: '/models/eye.glb',
  settings: {
    previewDistance: 4.5,
    halftone: {
      variant: 'band',
      dashColor: paletteColorNumber('white'),
    },
    animation: {
      autoSpeed: 0.1,
      followDragEnabled: true,
    },
  },
  initialPose: {
    autoElapsed: 11.523399999928483,
    rotateElapsed: 0,
    rotationX: 0,
    rotationY: 1.1339840023154435,
    rotationZ: 0,
    timeElapsed: 11.523399999928476,
  },
};
