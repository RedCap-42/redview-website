import { type MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';

export type FaqQuestion = {
  question: MessageDescriptor;
  answer: MessageDescriptor;
};

export const FAQ_QUESTIONS: readonly FaqQuestion[] = [
  {
    question: msg`Qu'est-ce qui différencie RedView des outils 3D comme Komoot ou Fatmap ?`,
    answer: msg`RedView offre une résolution d'élévation à 40 cm et un LiDAR à 20 cm, contre 10 à 30 m sur les outils standards. Vous bénéficiez d'une précision submétrique réelle pour identifier chaque talus, falaise et obstacle au sol.`,
  },
  {
    question: msg`Quelles sont les zones géographiques couvertes par la 3D haute résolution ?`,
    answer: msg`La couverture ultra-haute résolution (40 cm et LiDAR 20 cm) est active sur toute la France métropolitaine, la Corse, l'île de la Réunion et la Suisse. De nouvelles zones européennes sont intégrées en continu.`,
  },
  {
    question: msg`Comment fonctionne le visualisateur LiDAR 20 cm ?`,
    answer: msg`Le LiDAR analyse directement la surface brute du sol en retirant virtuellement la canopée et la végétation. Vous pouvez télécharger les tuiles LiDAR à la demande pour sécuriser vos passages avant le départ.`,
  },
  {
    question: msg`Puis-je importer et exporter mes traces GPX / KML ?`,
    answer: msg`Oui. Vous pouvez importer vos tracés GPX ou KML en un instant, visualiser leur profil 3D complet avec calcul d'ensoleillement, vent et enneigement, puis exporter vos variantes optimisées.`,
  },
  {
    question: msg`Comment la simulation d'ensoleillement et d'ombres est-elle calculée ?`,
    answer: msg`Notre moteur calcule dynamiquement la position astronomique exacte du soleil selon la date, l'heure et l'ombrage projeté par le relief environnant, vous permettant d'anticiper la luminosité et la température.`,
  },
  {
    question: msg`Les données météo et de neige sont-elles synchronisées en direct ?`,
    answer: msg`Oui. Les flux de vent vectoriels et la modélisation de l'enneigement physique (données Météo France 1km/1km) sont actualisés toutes les heures et directement projetés sur votre itinéraire 3D.`,
  },
  {
    question: msg`L'application fonctionne-t-elle sur tous les navigateurs et ordinateurs ?`,
    answer: msg`Oui. Le moteur 3D WebGL adaptatif ajuste automatiquement le niveau de détail et le maillage topographique en fonction de la puissance de votre carte graphique et de votre écran.`,
  },
];
