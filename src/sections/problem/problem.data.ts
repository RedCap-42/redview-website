import { type MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';

export type ProblemPoint = {
  heading: MessageDescriptor;
  body: MessageDescriptor;
};

export const PROBLEM_POINTS: readonly ProblemPoint[] = [
  {
    heading: msg`La nuit tombe avant vous`,
    body: msg`Votre calculateur a ignoré le poids du sac et le vent de face. Il annonçait 18 h au refuge, vous y arrivez à 21 h 40, sans frontale sur les derniers kilomètres.`,
  },
  {
    heading: msg`Le pierrier que la carte cachait`,
    body: msg`Vous voyez un sentier propre sur la vue satellite. Sur place, c'est une pente à 28 % sous la canopée, que vous découvrez à 2 400 m — quand faire demi-tour coûte plus cher que continuer.`,
  },
];
