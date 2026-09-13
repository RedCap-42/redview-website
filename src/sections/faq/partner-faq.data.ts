import { msg } from '@lingui/core/macro';

import { type FaqQuestion } from './faq.data';

export const PARTNER_FAQ_QUESTIONS: readonly FaqQuestion[] = [
  {
    question: msg`Comment fonctionne la mise en relation ?`,
    answer: msg`Partagez un court cahier des charges : projet, délai et budget. Nous sélectionnons les partenaires certifiés qui correspondent et vous mettons en relation sous 48 heures.`,
  },
  {
    question: msg`Combien facturent les partenaires ?`,
    answer: msg`Les tarifs varient selon le partenaire et le périmètre. Chaque profil partenaire affiche ses tarifs, que vous pouvez comparer avant de réserver un appel.`,
  },
  {
    question: msg`Comment les partenaires sont-ils sélectionnés ?`,
    answer: msg`Chaque partenaire est certifié par RedView et évalué sur des projets livrés, la profondeur technique et les retours clients avant de rejoindre l'annuaire.`,
  },
  {
    question: msg`Un partenaire peut-il reprendre mes données existantes ?`,
    answer: msg`Oui. Les partenaires « données » importent vos traces GPX, vos dalles LiDAR et vos projets depuis vos fichiers ou votre SIG actuel, et peuvent prendre en charge toute la bascule.`,
  },
  {
    question: msg`Les partenaires accompagnent-ils le traitement LiDAR ?`,
    answer: msg`Oui. Certains partenaires sont spécialisés dans le traitement de dalles LiDAR, la génération de MNT/MNS et l'intégration de chaînes de données géospatiales dans RedView.`,
  },
  {
    question: msg`Comment devenir partenaire ?`,
    answer: msg`Les guides, bureaux d'études, formateurs et intégrateurs postulent via la page du programme partenaire RedView, qui liste les prérequis et porte le formulaire de candidature.`,
  },
];
