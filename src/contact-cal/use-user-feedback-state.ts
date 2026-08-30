'use client';

import { useCallback, useReducer } from 'react';

import {
  type FeedbackScalarField,
  INITIAL_USER_FEEDBACK_STATE,
  type UserFeedbackState,
  userFeedbackReducer,
} from './user-feedback-state';
import { type SportOptionValue } from './user-feedback-types';

export type UserFeedbackController = {
  state: UserFeedbackState;
  setField: (field: FeedbackScalarField, value: string) => void;
  toggleAdditionalSport: (value: SportOptionValue) => void;
  addAttachment: (name: string) => void;
  removeAttachment: (name: string) => void;
  goNext: () => void;
  goBack: () => void;
  setSubmitting: (value: boolean) => void;
  setSubmitError: (value: string | null) => void;
  setSubmitted: () => void;
  reset: () => void;
};

export function useUserFeedbackState(): UserFeedbackController {
  const [state, dispatch] = useReducer(
    userFeedbackReducer,
    INITIAL_USER_FEEDBACK_STATE,
  );

  const setField = useCallback(
    (field: FeedbackScalarField, value: string) => {
      dispatch({ type: 'SET_FIELD', field, value });
    },
    [],
  );

  const toggleAdditionalSport = useCallback((value: SportOptionValue) => {
    dispatch({ type: 'TOGGLE_ADDITIONAL_SPORT', value });
  }, []);

  const addAttachment = useCallback((name: string) => {
    dispatch({ type: 'ADD_ATTACHMENT', name });
  }, []);

  const removeAttachment = useCallback((name: string) => {
    dispatch({ type: 'REMOVE_ATTACHMENT', name });
  }, []);

  const goNext = useCallback(() => {
    dispatch({ type: 'GO_NEXT' });
  }, []);

  const goBack = useCallback(() => {
    dispatch({ type: 'GO_BACK' });
  }, []);

  const setSubmitting = useCallback((value: boolean) => {
    dispatch({ type: 'SET_SUBMITTING', value });
  }, []);

  const setSubmitError = useCallback((value: string | null) => {
    dispatch({ type: 'SET_SUBMIT_ERROR', value });
  }, []);

  const setSubmitted = useCallback(() => {
    dispatch({ type: 'SET_SUBMITTED' });
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);

  return {
    state,
    setField,
    toggleAdditionalSport,
    addAttachment,
    removeAttachment,
    goNext,
    goBack,
    setSubmitting,
    setSubmitError,
    setSubmitted,
    reset,
  };
}
