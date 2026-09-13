import { sharedAssetUrls } from '@/app-preview/data/shared-asset-urls';

import { type DealData } from '../types/deal-data';
import { type PipelineCardId } from '../types/pipeline-card-id';

const PEOPLE = sharedAssetUrls.peopleAvatars;

// Illustrative trace comparison cards for the product mockup. Names are
// generic avatars; no real person or client is represented.
export const CARDS: Record<PipelineCardId, DealData> = {
  github: {
    amount: '312 km',
    avatarTone: 'blue',
    company: { domain: 'gr5.gpx', name: 'GR5 — Mercantour' },
    contact: { avatarUrl: PEOPLE.chrisWanstrath, name: 'Simon' },
    createdBy: { name: 'Import GPX', source: 'system' },
    date: '25 janv. 2026 21:26',
    id: 'github',
    title: 'Variante par le col',
  },
  figma: {
    amount: '184 km',
    avatarTone: 'orange',
    company: { domain: 'queyras.gpx', name: 'Tour du Queyras' },
    contact: { avatarUrl: PEOPLE.dylanField, name: 'Victor' },
    createdBy: { name: 'Import GPX', source: 'system' },
    date: '15 janv. 2026 21:27',
    id: 'figma',
    title: 'Boucle complète',
  },
  airbnb: {
    amount: '97 km',
    avatarTone: 'green',
    company: { domain: 'bure.gpx', name: 'Dévoluy — Pic de Bure' },
    contact: { avatarUrl: PEOPLE.brianChesky, name: 'Camille' },
    createdBy: {
      avatarUrl: PEOPLE.eddyCue,
      name: 'Simon',
      source: 'member',
    },
    date: '10 mars 2026 21:26',
    id: 'airbnb',
    title: 'Avec passage nord',
  },
  notion: {
    amount: '42 km',
    avatarTone: 'purple',
    company: { domain: 'galibier.gpx', name: 'Col du Galibier' },
    contact: { avatarUrl: PEOPLE.ivanZhao, name: 'Nadia' },
    createdBy: {
      avatarUrl: PEOPLE.anonymousFelix,
      name: 'Victor',
      source: 'member',
    },
    date: '18 févr. 2026 15:14',
    id: 'notion',
    title: 'Aller simple',
  },
  stripe: {
    amount: '128 km',
    avatarTone: 'pink',
    company: { domain: 'vercors.gpx', name: 'Balcon du Vercors' },
    contact: { avatarUrl: PEOPLE.patrickCollison, name: 'Marc' },
    createdBy: { name: 'Import GPX', source: 'system' },
    date: '2 févr. 2026 11:02',
    id: 'stripe',
    title: 'Boucle sud',
  },
};
