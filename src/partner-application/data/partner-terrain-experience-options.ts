import { msg } from '@lingui/core/macro';

import { defineFieldOptions } from './define-field-options';

export const PARTNER_TERRAIN_EXPERIENCE_OPTIONS = defineFieldOptions([
  { value: 'CUSTOM_APPS', label: msg`Préparation de courses` },
  { value: 'DATA_MODELS', label: msg`Reconnaissance de terrain` },
  { value: 'WORKFLOWS', label: msg`Analyse nivologique` },
  { value: 'FRONT_COMPONENTS', label: msg`Analyse solaire & pente` },
  { value: 'ROUTING', label: msg`Tracé & routage BRouter` },
  { value: 'EXPORT', label: msg`Export GPX & dossiers` },
]);

export type PartnerTerrainExperienceValue =
  (typeof PARTNER_TERRAIN_EXPERIENCE_OPTIONS)[number]['value'];
