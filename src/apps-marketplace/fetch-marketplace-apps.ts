import { type MarketplaceApp } from './marketplace-app';

export const REDVIEW_MARKETPLACE_APPS: readonly MarketplaceApp[] = [
  {
    universalIdentifier: 'ign-lidar-hd',
    slug: 'ign-lidar-hd',
    name: 'Scan LiDAR HD (20 cm)',
    tagline: 'Dalles laser brutes 20 cm de l\'IGN. Supprime la canopée et la végétation pour inspecter la praticabilité réelle des sols et sentiers.',
    author: 'IGN France',
    category: 'Terrain & LiDAR',
    isVetted: true,
  },
  {
    universalIdentifier: 'brouter-engine',
    slug: 'brouter-engine',
    name: 'BRouter Profils Dynamiques',
    tagline: 'Génération de profils BRF de plus de 500 lignes. 8 types de surfaces (Gravel, Singletrack, Route) et mode Climb-Seeker Best-of-N.',
    author: 'BRouter Core',
    category: 'Planification & POI',
    isVetted: true,
  },
  {
    universalIdentifier: 'fit-predictor-wasm',
    slug: 'fit-predictor-wasm',
    name: 'Simulation d\'Effort Wasm',
    tagline: 'Modélisation physiologique d\'allure aux Watts (FTP, CdA, Crr, fatigue exponentielle) et calcul d\'ETA prédictif segment par segment.',
    author: 'RedView Engine',
    category: 'Analyse & Télémétrie',
    isVetted: true,
  },
  {
    universalIdentifier: 'corridor-poi-osm',
    slug: 'corridor-poi-osm',
    name: 'Recherche POI en Corridor OSM',
    tagline: 'Extraction automatique des points d\'eau potable, boulangeries, épiceries et refuges dans un couloir de 50 à 500 m autour de votre GPX.',
    author: 'Overpass / OSM',
    category: 'Planification & POI',
    isVetted: true,
  },
  {
    universalIdentifier: 'multi-trace-comparator',
    slug: 'multi-trace-comparator',
    name: 'Comparateur Multi-Traces 3D',
    tagline: 'Superposez plusieurs variantes d\'itinéraires sur la même scène 3D. Comparez instantanément profils altimétriques, surfaces et chronos.',
    author: 'RedView Studio',
    category: 'Planification & POI',
    isVetted: true,
  },
  {
    universalIdentifier: 'slope-analysis-color',
    slug: 'slope-analysis-color',
    name: 'Colorimétrie des Pentes',
    tagline: 'Échelle de couleurs personnalisable en degrés ou en % pour isoler les sections raides (>15%), les zones roulantes et les replats de bivouac.',
    author: 'RedView Geospatial',
    category: 'Terrain & LiDAR',
    isVetted: true,
  },
  {
    universalIdentifier: 'multi-axis-telemetry',
    slug: 'multi-axis-telemetry',
    name: 'Télémétrie Multi-Axes',
    tagline: 'Graphique croisant 14 variables synchronisées en direct sur la trace (altitude, pente instantanée, puissance, vitesse, jour/nuit).',
    author: 'RedView Analytics',
    category: 'Analyse & Télémétrie',
    isVetted: true,
  },
  {
    universalIdentifier: 'dem-40cm-hd',
    slug: 'dem-40cm-hd',
    name: 'MNT Submétrique 40 cm',
    tagline: 'Modèle Numérique de Terrain 3D adaptatif haute résolution pour la France, la Suisse, la Corse et les territoires alpins.',
    author: 'Swisstopo / IGN',
    category: 'Terrain & LiDAR',
    isVetted: true,
  },
];

export async function fetchMarketplaceApps(): Promise<
  readonly MarketplaceApp[]
> {
  return REDVIEW_MARKETPLACE_APPS;
}
