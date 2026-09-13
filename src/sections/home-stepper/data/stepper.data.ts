import { type MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';

export type StepperStep = {
  body: MessageDescriptor;
  heading: MessageDescriptor;
};

export const STEPPER_STEPS: readonly StepperStep[] = [
  {
    heading: msg`1. Tracez avec des règles de surfaces *ultra-personnalisées*`,
    body: msg`Dites au moteur ce que vous acceptez de rouler : priorisez les single-tracks, tolérez le gravel, évitez le trafic, interdisez au-delà de 20 % de pente. Le tracé s'adapte à vos jambes, pas à une moyenne.`,
  },
  {
    heading: msg`2. Calculez votre allure au Watt près *et planifiez vos pauses*`,
    body: msg`Renseignez votre FTP, le poids total de votre vélo et votre rythme de pauses (5 min à une fontaine, 15 min de ravitaillement, 3 h 30 de sommeil par tranche de 24 h). Vous obtenez une heure de passage, pas une fourchette.`,
  },
  {
    heading: msg`3. Inspectez en 3D LiDAR *et exportez votre GPX enrichi*`,
    body: msg`Vérifiez les passages techniques sur les dalles LiDAR sans végétation, lisez les flux de vent et l'état de la neige, puis exportez votre trace avec feuille de route, puissances et météo.`,
  },
];
