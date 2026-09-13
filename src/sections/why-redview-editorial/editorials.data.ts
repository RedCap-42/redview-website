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
      msg`Une carte satellite montre une forêt. Le LiDAR montre ce qu'il y a dessous : le sentier qui serpente entre les blocs, le talus, le pierrier que personne n'avait signalé. Les dalles brutes IGN à 20 cm sont gommées de leur végétation pour révéler le sol nu et sa granulométrie réelle — celle sur laquelle vous allez rouler ou marcher.`,
      msg`Le moteur segmente 8 types de surfaces (gravel tassé, singletrack technique, piste forestière, route secondaire) et vous laisse régler vos tolérances : préférer, tolérer, éviter, interdire. Vous savez où commence l'asphalte et où débute le sentier engagé, avant de partir.`,
    ],
  },
  {
    align: 'right',
    eyebrow: msg`Planification & Estimation de temps`,
    heading: msg`Corridors de POI et allure prédictive. *Maîtrisez vos temps de passage.*`,
    id: 'planning-timing',
    paragraphs: [
      msg`Savoir, à l'avance, qu'il y a une fontaine à 40 m de votre trace au kilomètre 62 change la façon dont vous remplissez votre sac. RedView projette un corridor configurable de 50 à 500 m le long de votre GPX et en extrait automatiquement les points d'eau, refuges et ravitaillements. Chaque pause programmée est réinjectée dans votre feuille de route.`,
      msg`Le moteur Wasm/Rust calcule votre vitesse segment par segment en intégrant votre puissance réelle (FTP), le poids roulant total et la résistance au roulement. Vous obtenez une heure de passage au col qui tient debout — et vous savez si vous arrivez de jour ou de nuit.`,
    ],
  },
  {
    align: 'left',
    eyebrow: msg`Comparaison multi-traces`,
    heading: msg`Plusieurs variantes sur une même carte. *Arbitrez en un coup d'œil.*`,
    id: 'multi-trace',
    paragraphs: [
      msg`Le choix se joue souvent entre deux options qu'on ne peut pas comparer : la plus directe, ou celle qui passe plus près d'un refuge. RedView les superpose dans une seule scène 3D interactive, au lieu de laisser dix fichiers GPX ouverts dans dix fenêtres.`,
      msg`Vous comparez d'un coup d'œil le ratio dénivelé/distance, la part réelle de sentier contre celle de goudron, et le chrono prédictif de chaque variante. Vous découpez, fusionnez, et partez sur la trajectoire que vous avez réellement choisie.`,
    ],
  },
];
