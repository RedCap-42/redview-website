import { msg } from '@lingui/core/macro';

import { sharedAssetUrls } from '@/app-preview/data/shared-asset-urls';

import { type Task } from '../types/task';

const PEOPLE = sharedAssetUrls.peopleAvatars;

// Illustrative analysis checklist for the product mockup. Names are generic
// avatars; no real person is represented.
export const TASKS: Task[] = [
  {
    body: msg`Relancer le moteur neige sur la variante nord.`,
    done: false,
    due: '22 juil. 2026',
    id: 'recompute-snow',
    target: { avatarUrl: PEOPLE.anonymousFelix, name: 'Simon' },
    title: msg`Analyse neige`,
  },
  {
    body: msg`Corridor POI réglé à 200 m autour du GPX.`,
    done: false,
    due: '24 juil. 2026',
    id: 'set-poi-corridor',
    target: { avatarUrl: PEOPLE.anonymousFelix, name: 'Simon' },
    title: msg`Vérifier les points d'eau`,
  },
  {
    body: msg`Le profil BRF interdit les dalles au-delà de 15 %.`,
    done: false,
    due: '26 juil. 2026',
    id: 'tune-brf-profile',
    target: { avatarUrl: PEOPLE.anonymousFelix, name: 'Simon' },
    title: msg`Ajuster le profil BRouter`,
  },
  {
    body: msg`Export GPX et fiche d'itinéraire partagés.`,
    done: true,
    due: '18 juil. 2026',
    id: 'export-gpx',
    target: { avatarUrl: PEOPLE.anonymousFelix, name: 'Simon' },
    title: msg`Export GPX`,
  },
];
