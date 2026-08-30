import { type MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';

export type WhyRedViewEditorial = {
  align: 'left' | 'right';
  eyebrow: MessageDescriptor;
  heading: MessageDescriptor;
  id: string;
  paragraphs: readonly [MessageDescriptor, MessageDescriptor];
};

export const WHY_REDVIEW_EDITORIALS: readonly WhyRedViewEditorial[] = [
  {
    align: 'left',
    eyebrow: msg`Qualité du terrain`,
    heading: msg`Voir sous la canopée. *Inspectez la praticabilité réelle du sol.*`,
    id: 'terrain-quality',
    paragraphs: [
      msg`Sur les fonds de carte standards et les vues satellites, les sentiers forestiers et les pierriers d'altitude restent invisibles sous la végétation. Le cycliste ou randonneur découvre la rudesse du terrain au dernier moment. RedView lève cette incertitude grâce aux dalles brutes LiDAR IGN à 20 cm de précision : la végétation est gommée pour révéler le sol nu, les talus, les rochers et la granulométrie réelle des chemins.`,
      msg`Le moteur de routage segmente précisément 8 types de surfaces (Gravel tassé, Singletrack technique, Pistes forestières, Routes secondaires) avec des règles strictes (préférer, tolérer, éviter, interdire). Vous savez exactement où commence l'asphalte et où débute le sentier engagé.`,
    ],
  },
  {
    align: 'right',
    eyebrow: msg`Planification & Estimation de temps`,
    heading: msg`Corridors de POI et allure prédictive. *Maîtrisez vos temps de passage.*`,
    id: 'planning-timing',
    paragraphs: [
      msg`Trouver de l'eau potable, une boulangerie ou un refuge en autonomie totale ne doit pas dépendre de recherches manuelles fastidieuses. RedView projette un corridor configurable de 50 à 500 m le long de votre trace GPX et en extrait automatiquement tous les points d'intérêt vitaux. Chaque pause programmée (5 min à une fontaine, 20 min de ravitaillement, 3h30 de sommeil) est réinjectée dans votre feuille de route.`,
      msg`Notre moteur Wasm/Rust calcule votre vitesse segment par segment en intégrant votre puissance (Watts/FTP), le poids roulant total (vélo + paquetage) et la résistance au roulement (Crr). Vous obtenez une heure d'arrivée (ETA) au sommet d'un col d'une fiabilité absolue.`,
    ],
  },
  {
    align: 'left',
    eyebrow: msg`Comparaison multi-traces`,
    heading: msg`Plusieurs variantes sur une même carte. *Arbitrez en un coup d'œil.*`,
    id: 'multi-trace',
    paragraphs: [
      msg`Fini les dizaines de fenêtres ouvertes et les fichiers GPX renommés pour comparer deux options de parcours. Avec le système ItineraryProject de RedView, regroupez et superposez toutes vos variantes sur une seule et même scène 3D interactive.`,
      msg`Comparez instantanément le ratio dénivelé/distance, la part respective de sentier et de route goudronnée, ainsi que le chrono prédictif de chaque variante. Vous fusionnez, découpez vos étapes journalières et choisissez la meilleure trajectoire avec une clarté totale.`,
    ],
  },
];
