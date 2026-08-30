import { type MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';

export type StepperStep = {
  body: MessageDescriptor;
  heading: MessageDescriptor;
};

export const STEPPER_STEPS: readonly StepperStep[] = [
  {
    heading: msg`1. Tracez avec des règles de surfaces *ultra-personnalisées*`,
    body: msg`Définissez vos priorités de traçage : priorisez les single-tracks, tolérez les pistes gravel, évitez les routes à fort trafic ou interdisez les pentes supérieures à 20%.`,
  },
  {
    heading: msg`2. Calculez votre allure au Watt près *et planifiez vos pauses*`,
    body: msg`Renseignez votre FTP, le poids total de votre vélo et configurez vos temps d'arrêt automatiques (5 min fontaine, 15 min boulangerie, 3h30 de sommeil par tranche de 24h).`,
  },
  {
    heading: msg`3. Inspectez en 3D LiDAR *et exportez votre GPX enrichi*`,
    body: msg`Vérifiez les passages techniques sur les dalles LiDAR sans végétation, contrôlez les flux de vent et exportez votre trace avec feuille de route, puissances et météo.`,
  },
];
