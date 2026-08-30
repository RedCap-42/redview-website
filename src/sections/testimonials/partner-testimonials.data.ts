import { type MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';

// The partner testimonials carry an author portrait, unlike the home set.
export type PartnerTestimonialRecord = {
  author: {
    designation: MessageDescriptor;
    name: MessageDescriptor;
    portraitSrc: string;
  };
  quote: MessageDescriptor;
};

export const PARTNER_TESTIMONIALS: readonly PartnerTestimonialRecord[] = [
  {
    quote: msg`RedView apporte le niveau de précision dont les coureurs d'ultra-endurance ont besoin. Le moteur BRouter sur-mesure combiné au modèle d'effort au Watt près permet de verrouiller un plan de course sans aucune improvisation.`,
    author: {
      name: msg`Benjamin R.`,
      designation: msg`Finisher Silk Road Mountain Race & Organisateur Gravel`,
      portraitSrc: '/images/partners/testimonials/benjamin-reynolds.webp',
    },
  },
  {
    quote: msg`La puissance du modèle nival à 7 phases est sans équivalent. Lors de notre reconnaissance dans les Alpes en début de saison, nous avons pu identifier exactement quels cols étaient bloqués par les névés avant même de partir.`,
    author: {
      name: msg`Bertrand M.`,
      designation: msg`Guide d'Expédition & Bikepacker Ultra-Distance`,
      portraitSrc: '/images/partners/testimonials/bertrams.webp',
    },
  },
  {
    quote: msg`Le visualisateur LiDAR 20cm sans végétation et le mode corridor de ravitaillement changent la donne pour préparer les épreuves en autonomie totale comme la Transcontinental. Rien n'est laissé au hasard.`,
    author: {
      name: msg`Michel B.`,
      designation: msg`Athlète Ultra & Spécialiste Pacing Longue Distance`,
      portraitSrc: '/images/partners/testimonials/mike-babiy.webp',
    },
  },
];
