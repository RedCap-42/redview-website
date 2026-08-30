import { msg } from '@lingui/core/macro';
import { type MessageDescriptor } from '@lingui/core';

import {
  type ExperienceLevelValue,
  type FeatureOptionValue,
  type FeedbackCategoryValue,
  type SportOptionValue,
} from '../user-feedback-types';

export type LabeledOption<TValue extends string> = {
  label: MessageDescriptor;
  value: TValue;
};

export const COUNTRY_OPTIONS: LabeledOption<string>[] = [
  { label: msg`France`, value: 'FR' },
  { label: msg`Belgique`, value: 'BE' },
  { label: msg`Suisse`, value: 'CH' },
  { label: msg`Canada`, value: 'CA' },
  { label: msg`Luxembourg`, value: 'LU' },
  { label: msg`Royaume-Uni`, value: 'GB' },
  { label: msg`États-Unis`, value: 'US' },
  { label: msg`Allemagne`, value: 'DE' },
  { label: msg`Espagne`, value: 'ES' },
  { label: msg`Italie`, value: 'IT' },
  { label: msg`Autre pays`, value: 'OTHER' },
];

export const PRIMARY_SPORT_OPTIONS: LabeledOption<SportOptionValue>[] = [
  { label: msg`Course à pied / Running`, value: 'running' },
  { label: msg`Trail running`, value: 'trail' },
  { label: msg`Cyclisme sur route`, value: 'road_cycling' },
  { label: msg`Gravel / VTT`, value: 'gravel_mtb' },
  { label: msg`Triathlon`, value: 'triathlon' },
  { label: msg`Randonnée / Trekking`, value: 'hiking' },
  { label: msg`Natation`, value: 'swimming' },
  { label: msg`Autre discipline`, value: 'other' },
];

export const EXPERIENCE_LEVEL_OPTIONS: LabeledOption<ExperienceLevelValue>[] = [
  { label: msg`Débutant (< 1 an)`, value: 'beginner' },
  { label: msg`Intermédiaire (1 à 3 ans)`, value: 'intermediate' },
  { label: msg`Confirmé (3 à 5 ans)`, value: 'advanced' },
  { label: msg`Expert / Compétiteur (> 5 ans)`, value: 'expert_pro' },
];

export const ANNUAL_VOLUME_OPTIONS: LabeledOption<string>[] = [
  { label: msg`< 500 km / an`, value: 'under_500' },
  { label: msg`500 – 1 500 km / an`, value: '500_1500' },
  { label: msg`1 500 – 3 000 km / an`, value: '1500_3000' },
  { label: msg`3 000 – 6 000 km / an`, value: '3000_6000' },
  { label: msg`> 6 000 km / an`, value: 'over_6000' },
];

export const ADDITIONAL_SPORTS_OPTIONS: LabeledOption<SportOptionValue>[] = [
  { label: msg`Running`, value: 'running' },
  { label: msg`Trail`, value: 'trail' },
  { label: msg`Route`, value: 'road_cycling' },
  { label: msg`Gravel / VTT`, value: 'gravel_mtb' },
  { label: msg`Triathlon`, value: 'triathlon' },
  { label: msg`Randonnée`, value: 'hiking' },
  { label: msg`Natation`, value: 'swimming' },
  { label: msg`Autre`, value: 'other' },
];

export const FEATURE_OPTIONS: LabeledOption<FeatureOptionValue>[] = [
  { label: msg`Calque météo & conditions`, value: 'weather_layer' },
  { label: msg`Tracés & Navigation GPS`, value: 'gps_navigation' },
  { label: msg`Analyse d'effort & Performance`, value: 'performance_analysis' },
  { label: msg`Import / Export GPX`, value: 'gpx_import_export' },
  { label: msg`Profil altimétrique & D+`, value: 'elevation_profile' },
  { label: msg`Cartographie & Relief 3D`, value: 'cartography_terrain' },
  { label: msg`Interface & Expérience utilisateur`, value: 'ui_experience' },
  { label: msg`Autre fonctionnalité`, value: 'other' },
];

export const FEEDBACK_CATEGORY_OPTIONS: LabeledOption<FeedbackCategoryValue>[] = [
  { label: msg`Bug / Problème technique`, value: 'bug' },
  { label: msg`Vitesse & Performance`, value: 'speed_performance' },
  { label: msg`Idée / Suggestion d'amélioration`, value: 'feature_request' },
  { label: msg`Problème d'affichage`, value: 'display_issue' },
  { label: msg`Retour d'expérience général`, value: 'general_feedback' },
];
