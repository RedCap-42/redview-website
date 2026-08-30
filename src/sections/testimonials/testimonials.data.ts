import { type MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';

export type TestimonialRecord = {
  author: { name: MessageDescriptor; designation: MessageDescriptor };
  quote: MessageDescriptor;
};

export const TESTIMONIALS: readonly TestimonialRecord[] = [
  {
    quote: msg`La précision du MNT 40cm et le calcul direct de l'ensoleillement ont changé la façon dont je planifie mes courses d'ultra-distance. Repérer les replats de bivouac et éviter les cols verglacés n'a jamais été aussi simple.`,
    author: {
      name: msg`Julien V.`,
      designation: msg`Finisher Transcontinental & Pratiquant Ultra-Distance`,
    },
  },
  {
    quote: msg`Le visualisateur LiDAR à 20cm est bluffant. On voit littéralement sous la forêt : les pierriers invisibles sur satellite apparaissent nettement, ce qui évite les mauvaises surprises en montagne.`,
    author: {
      name: msg`Claire M.`,
      designation: msg`Accompagnatrice en Moyenne Montagne & Traileuse Alpine`,
    },
  },
  {
    quote: msg`Avoir la modélisation de neige Météo France 1km et les flux de vent animés directement sur mon tracé 3D me fait gagner un temps précieux et apporte une réelle sécurité lors de mes expéditions hivernales.`,
    author: {
      name: msg`Marc D.`,
      designation: msg`Guide de Haute Montagne & Alpiniste`,
    },
  },
];
