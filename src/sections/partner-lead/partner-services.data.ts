import { type MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';

export type PartnerService = {
  title: MessageDescriptor;
  body: MessageDescriptor;
};

export const PARTNER_SERVICES: readonly PartnerService[] = [
  {
    title: msg`Données & imports`,
    body: msg`Reprenez vos traces GPX, dalles LiDAR et projets depuis vos fichiers ou votre SIG actuel.`,
  },
  {
    title: msg`Analyse & intégrations`,
    body: msg`Chaînes de traitement LiDAR, calculs MNT/MNS et intégrations géospatiales sur mesure.`,
  },
  {
    title: msg`Reconnaissance terrain`,
    body: msg`Accompagnement d'itinéraires, lecture du manteau neigeux et préparation de courses engagées.`,
  },
  {
    title: msg`Formation & accompagnement`,
    body: msg`Formez vos équipes à la lecture topographique 3D et à la préparation de traces.`,
  },
];
