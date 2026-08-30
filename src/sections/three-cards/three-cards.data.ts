import { type MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';

export type IllustrationId =
  | 'diamond'
  | 'eye'
  | 'flash'
  | 'lock'
  | 'singleScreen'
  | 'speed'
  | 'target';

export type IllustrationCardRecord = {
  attribution?: { role: MessageDescriptor; company: MessageDescriptor };
  body: MessageDescriptor;
  caseStudySlug?: string;
  heading: MessageDescriptor;
  illustration: IllustrationId;
};

export const ILLUSTRATION_CARDS: readonly IllustrationCardRecord[] = [
  {
    heading: msg`LiDAR 20cm & Tuiles IGN HD`,
    body: msg`Téléchargez les dalles LiDAR brutes (2 Go/dalle) pour supprimer la végétation et inspecter chaque sentier, pierrier et difficulté technique au demi-mètre près.`,
    attribution: {
      role: msg`Scan LiDAR IGN 2026`,
      company: msg`Sol nu & Praticabilité réelle`,
    },
    illustration: 'eye',
    caseStudySlug: 'visualisateur-lidar',
  },
  {
    heading: msg`Rythme & Pacing prédictif (FTP)`,
    body: msg`Calculez votre allure exacte en intégrant votre puissance (Watts), le poids de votre chargement, la météo en direct et la technicité des revêtements.`,
    attribution: {
      role: msg`Moteur de Rythme IA`,
      company: msg`Watts, FTP & Pauses programmées`,
    },
    illustration: 'flash',
    caseStudySlug: 'moteur-itineraire-personnalise',
  },
  {
    heading: msg`POIs sur trace & Profil Jour/Nuit`,
    body: msg`Détectez les fontaines, boulangeries et refuges à moins de 40m de votre parcours et visualisez les fenêtres de jour et de nuit directement sur le profil d'élévation.`,
    attribution: {
      role: msg`Timeline Éphéméride & POIs`,
      company: msg`Ravitaillement & Bivouac`,
    },
    illustration: 'target',
    caseStudySlug: 'simulation-ensoleillement-ombres',
  },
];
