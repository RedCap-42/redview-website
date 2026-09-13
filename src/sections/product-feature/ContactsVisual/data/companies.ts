import { sharedAssetUrls } from '@/app-preview/data/shared-asset-urls';

import { type ContactCompany } from '../types/contact-company';

const PEOPLE = sharedAssetUrls.peopleAvatars;

export const COMPANIES: ContactCompany[] = [
  {
    name: 'Col du Galibier',
    domain: 'galibier.gpx',
    createdBy: {
      name: 'Simon Farina',
      tone: 'gray',
      avatarUrl: PEOPLE.darioAmodei,
    },
    address: 'Briançonnais',
    accountOwner: {
      name: 'Simon Farina',
      tone: 'gray',
      avatarUrl: PEOPLE.darioAmodei,
    },
    icp: true,
    arr: '2 642',
    industry: 'Ski de rando',
  },
  {
    name: 'Tour du Queyras',
    domain: 'queyras.gpx',
    createdBy: {
      name: 'Victor Bouscavet',
      tone: 'purple',
      avatarUrl: PEOPLE.reidHoffman,
    },
    address: 'Queyras',
    accountOwner: {
      name: 'Victor Bouscavet',
      tone: 'turquoise',
      avatarUrl: PEOPLE.ryanRoslansky,
    },
    icp: false,
    arr: '4 180',
    industry: 'Ultra-trail',
  },
  {
    name: 'Arête des Cosmiques',
    domain: 'cosmiques.gpx',
    createdBy: {
      name: 'Simon Farina',
      tone: 'turquoise',
      avatarUrl: PEOPLE.stewartButterfield,
    },
    address: 'Massif du Mont-Blanc',
    accountOwner: {
      name: 'Simon Farina',
      tone: 'turquoise',
      avatarUrl: PEOPLE.stewartButterfield,
    },
    icp: true,
    arr: '1 240',
    industry: 'Alpinisme',
  },
  {
    name: 'Vallée des Merveilles',
    domain: 'merveilles.gpx',
    createdBy: { name: 'API — clé GPX', source: 'api' },
    address: 'Mercantour',
    accountOwner: {
      name: 'Victor Bouscavet',
      tone: 'gray',
      avatarUrl: PEOPLE.ivanZhao,
    },
    icp: false,
    arr: '2 010',
    industry: 'Trail',
  },
  {
    name: 'Col de la Bonette',
    domain: 'bonette.gpx',
    createdBy: { name: 'Import BRouter', source: 'workflow' },
    address: 'Haute-Tinée',
    accountOwner: {
      name: 'Simon Farina',
      tone: 'purple',
      avatarUrl: PEOPLE.dylanField,
    },
    icp: true,
    arr: '1 960',
    industry: 'Vélo',
  },
  {
    name: 'Chamonix — Planpraz',
    domain: 'planpraz.gpx',
    createdBy: {
      name: 'Victor Bouscavet',
      tone: 'gray',
      avatarUrl: PEOPLE.chrisWanstrath,
    },
    address: 'Aiguilles Rouges',
    accountOwner: {
      name: 'Victor Bouscavet',
      tone: 'gray',
      avatarUrl: PEOPLE.thomasDohmke,
    },
    icp: true,
    arr: '1 120',
    industry: 'Skyrunning',
  },
  {
    name: 'Balcon du Vercors',
    domain: 'vercors.gpx',
    createdBy: {
      name: 'Simon Farina',
      tone: 'pink',
      avatarUrl: PEOPLE.brianChesky,
    },
    address: 'Vercors',
    accountOwner: {
      name: 'Simon Farina',
      tone: 'pink',
      avatarUrl: PEOPLE.brianChesky,
    },
    icp: false,
    arr: '1 540',
    industry: 'Randonnée',
  },
  {
    name: 'Dévoluy — Pic de Bure',
    domain: 'bure.gpx',
    createdBy: {
      name: 'Victor Bouscavet',
      tone: 'blue',
      avatarUrl: PEOPLE.patrickCollison,
    },
    address: 'Dévoluy',
    accountOwner: {
      name: 'Victor Bouscavet',
      tone: 'blue',
      avatarUrl: PEOPLE.patrickCollison,
    },
    icp: true,
    arr: '2 380',
    industry: 'Ski de rando',
  },
  {
    name: 'Mercantour — GR5',
    domain: 'gr5.gpx',
    createdBy: { name: 'Simon Farina', tone: 'amber' },
    address: 'Alpes-Maritimes',
    accountOwner: { name: 'Simon Farina', tone: 'amber' },
    icp: true,
    arr: '5 640',
    industry: 'Ultra-trail',
  },
];
