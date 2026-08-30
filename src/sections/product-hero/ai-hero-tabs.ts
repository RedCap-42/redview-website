import { type MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';

export type AiHeroTabIcon = 'kanban' | 'checklist' | 'chart' | 'workflow';

export type AiHeroTab = {
  body: MessageDescriptor;
  icon: AiHeroTabIcon;
};

// The four AI scenes the hero offers; index N selects product-visual
// scene N+1 (scene 0 is the collaborative intro).
export const AI_HERO_TABS: AiHeroTab[] = [
  {
    body: msg`Comparer 3 variantes d'itinéraires et leurs chronos`,
    icon: 'chart',
  },
  {
    body: msg`Inspecter la qualité du sentier en dalle LiDAR 20cm`,
    icon: 'kanban',
  },
  {
    body: msg`Estimer l'heure d'arrivée avec 4 pauses programmées`,
    icon: 'checklist',
  },
  {
    body: msg`Détecter fontaines et abris dans un corridor de 150m`,
    icon: 'workflow',
  },
];
