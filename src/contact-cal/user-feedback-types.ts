export type FeedbackStepId = 'identity' | 'sports' | 'feedback';

export const USER_FEEDBACK_STEP_IDS: readonly FeedbackStepId[] = [
  'identity',
  'sports',
  'feedback',
] as const;

export type SportOptionValue =
  | 'running'
  | 'trail'
  | 'road_cycling'
  | 'gravel_mtb'
  | 'triathlon'
  | 'hiking'
  | 'swimming'
  | 'other';

export type ExperienceLevelValue =
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  | 'expert_pro';

export type FeatureOptionValue =
  | 'weather_layer'
  | 'gps_navigation'
  | 'performance_analysis'
  | 'gpx_import_export'
  | 'elevation_profile'
  | 'cartography_terrain'
  | 'ui_experience'
  | 'other';

export type FeedbackCategoryValue =
  | 'bug'
  | 'speed_performance'
  | 'feature_request'
  | 'display_issue'
  | 'general_feedback';
