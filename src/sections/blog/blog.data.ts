import { type MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';

export type BlogPost = {
  id: string;
  slug: string;
  title: MessageDescriptor;
  excerpt: MessageDescriptor;
  category: MessageDescriptor;
  date: string;
  readingTime: string;
  author: {
    name: string;
    role: MessageDescriptor;
    avatar?: string;
  };
  image: string;
  tags: readonly string[];
  featured?: boolean;
};

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    id: 'lidar-20cm-sous-bois',
    slug: 'lidar-20cm-analyse-sous-bois',
    featured: true,
    title: msg`Exploiter le LiDAR 20 cm pour débusquer les passages et sentiers sous canopée dense`,
    excerpt: msg`Comment l'élimination numérique de la couverture végétale via les nuages de points classifiés permet de repérer des sentes disparues des cartes IGN et OpenStreetMap.`,
    category: msg`Topographie & LiDAR`,
    date: '2026-08-24',
    readingTime: '6 min',
    author: {
      name: 'Dr. Lucas V.',
      role: msg`Ingénieur Géodésie & Cartographie 3D`,
    },
    image: '/images/menu/developers.webp',
    tags: ['LiDAR IGN', 'Topographie 3D', 'Reconnaissance'],
  },
  {
    id: 'comparateur-multi-traces-gpx',
    slug: 'comparateur-multi-traces-gpx',
    title: msg`Optimisation d'itinéraires : comparer jusqu'à 4 variantes GPX en direct sur le même relief 3D`,
    excerpt: msg`Superposez vos variantes de parcours, observez instantanément les profils de pente différentiels et arbitrez en temps réel sur les passages engagés.`,
    category: msg`Ingénierie de trace`,
    date: '2026-08-18',
    readingTime: '4 min',
    author: {
      name: 'Alexandre M.',
      role: msg`Ultra-traileur & Développeur Moteur 3D`,
    },
    image: '/images/menu/why.webp',
    tags: ['Multi-traces', 'GPX', 'Analyse comparative'],
  },
  {
    id: 'analyse-ensoleillement-creetes',
    slug: 'analyse-ensoleillement-creetes',
    title: msg`Ensoleillement horaire et état des surfaces : anticiper le dégel et la praticabilité des névés`,
    excerpt: msg`Notre modèle de projection d'ombres solaires calcule l'exposition exacte minute par minute sur la surface du terrain pour sécuriser vos franchissements matinaux.`,
    category: msg`Météo & Sols`,
    date: '2026-08-10',
    readingTime: '5 min',
    author: {
      name: 'Sophie D.',
      role: msg`Guide de Haute Montagne`,
    },
    image: '/images/menu/user-guide.webp',
    tags: ['Ensoleillement', 'Sécurité', 'Haute Montagne'],
  },
  {
    id: 'moteur-climb-seeker',
    slug: 'moteur-climb-seeker-best-of-n',
    title: msg`Sous le capot du moteur Climb-Seeker : l'algorithme Best-of-N pour des pourcentages de pente réalistes`,
    excerpt: msg`Fini les pics d'élévation erronés et les micro-bruits GPS : découvrez comment notre algorithme d'ajustement barycentrique lisse et restitue la pente réelle.`,
    category: msg`Algorithmes`,
    date: '2026-07-28',
    readingTime: '8 min',
    author: {
      name: 'Romain B.',
      role: msg`Architecte Algorithmes Géométriques`,
    },
    image: '/images/menu/developers.webp',
    tags: ['Climb-Seeker', 'Pentes', 'Précision GPX'],
  },
  {
    id: 'corridors-points-eau-ravitaillement',
    slug: 'corridors-points-eau-ravitaillement',
    title: msg`Planification ultra-distance : extraction automatique de corridors POI et points de résilience`,
    excerpt: msg`Paramétrez un rayon tampon de 150 m le long de votre itinéraire pour faire remonter automatiquement sources, refuges, abris et zones d'évacuation d'urgence.`,
    category: msg`Méthodologie`,
    date: '2026-07-15',
    readingTime: '5 min',
    author: {
      name: 'Camille T.',
      role: msg`Responsable Recherche & Aventure`,
    },
    image: '/images/menu/partners.webp',
    tags: ['Corridors POI', 'Ultra-distance', 'Points d\'eau'],
  },
];
