import { type MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';

export type ProblemPoint = {
  heading: MessageDescriptor;
  body: MessageDescriptor;
};

export const PROBLEM_POINTS: readonly ProblemPoint[] = [
  {
    heading: msg`L'approximation des temps et de l'effort`,
    body: msg`Les calculateurs standards ignorent votre puissance en Watts (FTP), le poids réel de votre vélo et les ralentissements météo, faussant vos heures d'arrivée.`,
  },
  {
    heading: msg`L'invisibilité des obstacles sous la canopée`,
    body: msg`Avec une maille satellite à 30m, les pierriers glissants, failles rocheuses et sentiers impraticables restent masqués jusqu'au moment où vous êtes coincé sur le terrain.`,
  },
];
