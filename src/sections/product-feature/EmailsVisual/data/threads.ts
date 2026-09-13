import { msg } from '@lingui/core/macro';

import { sharedAssetUrls } from '@/app-preview/data/shared-asset-urls';

import { type EmailThread } from '../types/email-thread';

const PEOPLE = sharedAssetUrls.peopleAvatars;

// Illustrative trace-analysis threads for the product mockup. Names and
// addresses are generic avatars; no real person is represented.
export const THREADS: EmailThread[] = [
  {
    date: '24 juin 2026',
    messageCount: 4,
    participants: [
      { avatarUrl: PEOPLE.anonymousFelix, name: 'Simon' },
      { avatarUrl: PEOPLE.anonymousThomas, name: 'Victor' },
    ],
    preview: msg`J'ai relancé le moteur neige sur la trace : 40 cm de fraîche au col, le passage nord reste chargé.`,
    subject: msg`Analyse neige — Col du Galibier`,
  },
  {
    date: '23 juin 2026',
    messageCount: 2,
    participants: [
      { avatarUrl: PEOPLE.anonymousLaura, name: 'Camille' },
      { avatarUrl: PEOPLE.anonymousIndira, name: 'Nadia' },
    ],
    preview: msg`Le corridor POI remonte trois fontaines et un refuge entre le km 18 et le km 31, tout est calé.`,
    subject: msg`Ravitaillement — Tour du Queyras`,
  },
  {
    date: '20 juin 2026',
    messageCount: 3,
    participants: [
      { avatarUrl: PEOPLE.anonymousIndira, name: 'Nadia' },
      { avatarUrl: PEOPLE.anonymousMike, name: 'Marc' },
    ],
    preview: msg`Entre 14 h et 16 h la face est plein soleil, l'ombre du sommet bascule peu après le col.`,
    subject: msg`Ensoleillement — Arête des Cosmiques`,
  },
  {
    date: '18 juin 2026',
    messageCount: 1,
    participants: [
      { avatarUrl: PEOPLE.anonymousThomas, name: 'Victor' },
      { avatarUrl: PEOPLE.anonymousLaura, name: 'Camille' },
    ],
    preview: msg`Le profil BRF évite les dalles > 15 % et garde le single track : ETA recalculée à 6 h 40.`,
    subject: msg`Routage — Dévoluy`,
  },
];
