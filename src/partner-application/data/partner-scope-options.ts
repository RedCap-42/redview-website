import { msg } from '@lingui/core/macro';

import { defineFieldOptions } from './define-field-options';

// Each scope is a selectable card carrying its own description and examples.
export const PARTNER_SCOPE_OPTIONS = defineFieldOptions([
  {
    value: 'ADVISORY',
    label: msg`Conseil & Analyse de terrain`,
    description: msg`Analyse en amont, cadrage et méthodologie.`,
    examples: msg`Lecture de terrain · Analyse nivologique · Reconnaissance d'itinéraire · Étude de praticabilité · Choix de variante · Évaluation du risque`,
  },
  {
    value: 'SOLUTIONING',
    label: msg`Préparation d'itinéraires`,
    description: msg`Ce que vous produisez directement dans RedView, sans développement.`,
    examples: msg`Import GPX · Analyse de pente · Simulation solaire · Corridor POI · Export enrichi · Dossiers de course`,
  },
  {
    value: 'DEVELOPMENT',
    label: msg`Développement & Intégration`,
    description: msg`Tout ce qui nécessite des compétences techniques.`,
    examples: msg`Intégration SIG · API géospatiale · Automatisation · Traitement LiDAR · Chaînes de données`,
  },
  {
    value: 'HOSTING',
    label: msg`Hébergement & Infrastructure`,
    description: msg`Tout ce qui relève de l'infrastructure ou du devops.`,
    examples: msg`Auto-hébergement (Docker/K8s) · Architecture cloud · Tuiles & CDN · Montée en charge · Sécurité`,
  },
  {
    value: 'SUPPORT',
    label: msg`Formation & Accompagnement`,
    description: msg`Déploiement auprès des équipes et support continu.`,
    examples: msg`Formation de guides · Documentation · Accompagnement d'école · Support · Prestations récurrentes`,
  },
]);

export type PartnerScopeValue = (typeof PARTNER_SCOPE_OPTIONS)[number]['value'];
