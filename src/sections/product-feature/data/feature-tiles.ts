import { msg } from '@lingui/core/macro';

import { type FeatureTile } from '../types/feature-tile';

export const FEATURE_TILES: FeatureTile[] = [
  {
    category: msg`Topographie & LiDAR HD`,
    heading: msg`Précision submétrique et sol nu sans végétation.`,
    description: msg`Visualisez le terrain en 3D native avec une résolution d'élévation à 40 cm et téléchargez les dalles laser LiDAR IGN à 20 cm pour inspecter les sentiers réels, pierriers et sentes masquées.`,
    visual: 'dashboard',
    bullets: [
      {
        icon: 'check',
        text: msg`Dalles LiDAR brutes 20 cm (parsing binaire LAZ multi-thread)`,
      },
      { icon: 'search', text: msg`MNT 3D adaptatif avec shaders WebGL haute performance` },
      { icon: 'check', text: msg`Détection centimétrique des ruptures de pente et pierriers` },
    ],
  },
  {
    category: msg`Moteur de Routage & 8 Revêtements`,
    heading: msg`Compilation de profils BRF de 500+ lignes à la volée.`,
    description: msg`Pilotez le moteur cinématique BRouter avec des règles strictes sur 8 types de surfaces (Gravel, Singletrack, Routes, Pistes) et un algorithme Climb-Seeker Best-of-N qui explore 4 alternatives de relief.`,
    visual: 'tasks',
    bullets: [
      { icon: 'check', text: msg`8 types de surfaces (préférer, tolérer, éviter, interdire)` },
      { icon: 'users', text: msg`Mode Climb-Seeker Best-of-N pour maximiser les ascensions` },
      { icon: 'edit', text: msg`Polygones de zones interdites (No-Go areas) injectés en direct` },
    ],
  },
  {
    category: msg`Planification & Estimation de Temps`,
    heading: msg`Chrono prédictif au Watt près et gestion des pauses.`,
    description: msg`Moteur Rust/Wasm simulant votre vitesse segment par segment (20 m) à partir de vos Watts (FTP), du poids total et de la résistance au roulement, avec réinjection automatique des arrêts.`,
    visual: 'emails',
    bullets: [
      { icon: 'check', text: msg`Calcul d'heure d'arrivée (ETA) ultra-précis au sommet des cols` },
      {
        icon: 'search',
        text: msg`Modélisation de fatigue exponentielle (fatigue_lambda & fatigue_floor)`,
      },
      { icon: 'book', text: msg`Simulation des arrêts programmés (fontaine, repas, sommeil)` },
    ],
  },
  {
    category: msg`Corridor de POI & Ravitaillement`,
    heading: msg`Recherche OSM le long de la trace et sécurité.`,
    description: msg`Extraction ciblée des points d'eau potable, boulangeries, épiceries et refuges dans un corridor configurable de 50 à 500 m autour du GPX, intégrés directement à la timeline.`,
    visual: 'contacts',
    bullets: [
      { icon: 'edit', text: msg`Corridor Overpass/OSM filtré ultra-endurance (eau, nourriture, abris)` },
      {
        icon: 'book',
        text: msg`Timeline kilométrique mathématique proportionnelle à la distance`,
      },
      {
        icon: 'search',
        text: msg`Zéro mauvaise surprise en zone isolée ou en autonomie complète`,
      },
    ],
  },
  {
    category: msg`Comparaison Multi-Traces`,
    heading: msg`Superposez vos variantes sur une seule interface 3D.`,
    description: msg`Regroupez de 1 à N variantes au sein d'un même ItineraryProject. Comparez en un coup d'œil les profils, les ratios de surface et les estimations de temps pour choisir la meilleure option.`,
    visual: 'pipeline',
    bullets: [
      { icon: 'edit', text: msg`Superposition directe de variantes sur la même carte 3D` },
      { icon: 'check', text: msg`Comparaison instantanée des dénivelés, distances et chronos` },
      { icon: 'tag', text: msg`Outils de fusion de traces et découpage d'étapes journalières` },
    ],
  },
  {
    category: msg`Analyse des Pentes & Praticabilité`,
    heading: msg`Colorimétrie sur-mesure et seuils d'inclinaison.`,
    description: msg`Colorisez les pentes selon vos propres pourcentages pour repérer instantanément les murs infranchissables (>15%), les sections roulantes et les replats propices au bivouac.`,
    visual: 'files',
    bullets: [
      { icon: 'check', text: msg`Échelle de couleurs 100% personnalisable en degrés ou en %` },
      { icon: 'edit', text: msg`Repérage visuel immédiat des difficultés et passages clés` },
      {
        icon: 'eye',
        text: msg`Découpage par tranches d'altitude pour isoler vallées et cols`,
      },
    ],
  },
  {
    category: msg`Graphiques Multi-Axes & Télémétrie`,
    heading: msg`14 variables croisées en temps réel sur la trace.`,
    description: msg`Visualisez simultanément l'altitude, la pente instantanée, la puissance nécessaire et la vitesse sur un axe kilométrique ou temporel, avec découpage jour/nuit synchronisé.`,
    visual: 'import',
    bullets: [
      { icon: 'check', text: msg`Double axe Y synchronisé (14 variables d'effort et terrain)` },
      {
        icon: 'code',
        text: msg`Bascule Distance (km) / Durée d'effort / Heure absolue ETA`,
      },
      { icon: 'check', text: msg`Découpage visuel jour/nuit et alertes pourcentages extrêmes` },
    ],
  },
];
