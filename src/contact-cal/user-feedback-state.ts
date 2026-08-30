import {
  type ExperienceLevelValue,
  type FeatureOptionValue,
  type FeedbackCategoryValue,
  type SportOptionValue,
  USER_FEEDBACK_STEP_IDS,
} from './user-feedback-types';

export type UserFeedbackState = {
  stepIndex: number;

  // Étape 1 : Coordonnées
  firstName: string;
  lastName: string;
  email: string;
  country: string;

  // Étape 2 : Pratique
  primarySport: SportOptionValue | '';
  level: ExperienceLevelValue | '';
  annualVolume: string;
  additionalSports: SportOptionValue[];

  // Étape 3 : Retour
  feature: FeatureOptionValue | '';
  feedbackType: FeedbackCategoryValue | '';
  description: string;
  attachmentNames: string[];

  // Meta
  fieldErrors: Partial<Record<string, string>>;
  submitError: string | null;
  isSubmitting: boolean;
  isSubmitted: boolean;
};

export type FeedbackScalarField =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'country'
  | 'primarySport'
  | 'level'
  | 'annualVolume'
  | 'feature'
  | 'feedbackType'
  | 'description';

export type UserFeedbackAction =
  | { type: 'SET_FIELD'; field: FeedbackScalarField; value: string }
  | { type: 'TOGGLE_ADDITIONAL_SPORT'; value: SportOptionValue }
  | { type: 'ADD_ATTACHMENT'; name: string }
  | { type: 'REMOVE_ATTACHMENT'; name: string }
  | { type: 'SET_FIELD_ERRORS'; errors: Partial<Record<string, string>> }
  | { type: 'GO_NEXT' }
  | { type: 'GO_BACK' }
  | { type: 'SET_SUBMITTING'; value: boolean }
  | { type: 'SET_SUBMIT_ERROR'; value: string | null }
  | { type: 'SET_SUBMITTED' }
  | { type: 'RESET' };

export const INITIAL_USER_FEEDBACK_STATE: UserFeedbackState = {
  stepIndex: 0,
  firstName: '',
  lastName: '',
  email: '',
  country: 'FR',
  primarySport: '',
  level: '',
  annualVolume: '',
  additionalSports: [],
  feature: '',
  feedbackType: '',
  description: '',
  attachmentNames: [],
  fieldErrors: {},
  submitError: null,
  isSubmitting: false,
  isSubmitted: false,
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateUserFeedbackStep(
  state: UserFeedbackState,
): Partial<Record<string, string>> {
  const stepId = USER_FEEDBACK_STEP_IDS[state.stepIndex];
  const errors: Partial<Record<string, string>> = {};

  if (stepId === 'identity') {
    if (!state.firstName.trim()) errors.firstName = 'required';
    if (!state.lastName.trim()) errors.lastName = 'required';
    if (!state.email.trim()) {
      errors.email = 'required';
    } else if (!EMAIL_REGEX.test(state.email.trim())) {
      errors.email = 'invalid_email';
    }
    if (!state.country) errors.country = 'required';
  } else if (stepId === 'sports') {
    if (!state.primarySport) errors.primarySport = 'required';
    if (!state.level) errors.level = 'required';
    if (!state.annualVolume) errors.annualVolume = 'required';
  } else if (stepId === 'feedback') {
    if (!state.feature) errors.feature = 'required';
    if (!state.feedbackType) errors.feedbackType = 'required';
    if (!state.description.trim()) {
      errors.description = 'required';
    } else if (state.description.trim().length < 10) {
      errors.description = 'too_short';
    }
  }

  return errors;
}

export function userFeedbackReducer(
  state: UserFeedbackState,
  action: UserFeedbackAction,
): UserFeedbackState {
  switch (action.type) {
    case 'SET_FIELD': {
      const nextErrors = { ...state.fieldErrors };
      delete nextErrors[action.field];
      return {
        ...state,
        [action.field]: action.value,
        fieldErrors: nextErrors,
      };
    }
    case 'TOGGLE_ADDITIONAL_SPORT': {
      const exists = state.additionalSports.includes(action.value);
      const next = exists
        ? state.additionalSports.filter((item) => item !== action.value)
        : [...state.additionalSports, action.value];
      return { ...state, additionalSports: next };
    }
    case 'ADD_ATTACHMENT': {
      if (state.attachmentNames.includes(action.name)) return state;
      return {
        ...state,
        attachmentNames: [...state.attachmentNames, action.name],
      };
    }
    case 'REMOVE_ATTACHMENT': {
      return {
        ...state,
        attachmentNames: state.attachmentNames.filter(
          (name) => name !== action.name,
        ),
      };
    }
    case 'SET_FIELD_ERRORS':
      return { ...state, fieldErrors: action.errors };
    case 'GO_NEXT': {
      const errors = validateUserFeedbackStep(state);
      if (Object.keys(errors).length > 0) {
        return { ...state, fieldErrors: errors };
      }
      return {
        ...state,
        fieldErrors: {},
        stepIndex: Math.min(
          state.stepIndex + 1,
          USER_FEEDBACK_STEP_IDS.length - 1,
        ),
      };
    }
    case 'GO_BACK':
      return {
        ...state,
        fieldErrors: {},
        stepIndex: Math.max(state.stepIndex - 1, 0),
      };
    case 'SET_SUBMITTING':
      return { ...state, isSubmitting: action.value };
    case 'SET_SUBMIT_ERROR':
      return { ...state, submitError: action.value };
    case 'SET_SUBMITTED':
      return { ...state, isSubmitted: true, isSubmitting: false };
    case 'RESET':
      return INITIAL_USER_FEEDBACK_STATE;
    default:
      return state;
  }
}
