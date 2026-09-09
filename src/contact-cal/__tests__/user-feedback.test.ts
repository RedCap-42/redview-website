/**
 * @jest-environment jsdom
 */

import {
  INITIAL_USER_FEEDBACK_STATE,
  userFeedbackReducer,
  validateUserFeedbackStep,
} from '../user-feedback-state';
import {
  cleanFeedbackUrlParams,
  shouldOpenFeedbackFromUrl,
} from '../ContactCalModalRoot';
import { getFeedbackPrefillFromUrl } from '../wizard/UserFeedbackWizard';

describe('user feedback state & prefill', () => {
  it('resets with prefill payload and preserves custom stepIndex', () => {
    const prefilled = userFeedbackReducer(INITIAL_USER_FEEDBACK_STATE, {
      type: 'RESET',
      prefill: {
        stepIndex: 2,
        email: 'rider@example.com',
        firstName: 'Jean',
        lastName: 'Dupont',
        country: 'FR',
      },
    });

    expect(prefilled.stepIndex).toBe(2);
    expect(prefilled.email).toBe('rider@example.com');
    expect(prefilled.firstName).toBe('Jean');
    expect(prefilled.lastName).toBe('Dupont');
    expect(prefilled.country).toBe('FR');
  });

  it('validates only step 3 requirements when active step is feedback', () => {
    const stateAtStep3 = {
      ...INITIAL_USER_FEEDBACK_STATE,
      stepIndex: 2,
      feature: '' as const,
      feedbackType: '' as const,
      description: '',
    };

    const errors = validateUserFeedbackStep(stateAtStep3);
    expect(errors.feature).toBe('required');
    expect(errors.feedbackType).toBe('required');
    expect(errors.description).toBe('required');
    // Identity fields are not re-validated if step is feedback
    expect(errors.email).toBeUndefined();
  });

  it('detects URL feedback trigger in search params and hash', () => {
    window.history.pushState({}, '', '/?feedback=open&step=3');
    expect(shouldOpenFeedbackFromUrl()).toBe(true);

    const prefill = getFeedbackPrefillFromUrl();
    expect(prefill?.stepIndex).toBe(2);

    window.history.pushState({}, '', '/#feedback');
    expect(shouldOpenFeedbackFromUrl()).toBe(true);

    window.history.pushState({}, '', '/?formulaire=open');
    expect(shouldOpenFeedbackFromUrl()).toBe(true);

    window.history.pushState({}, '', '/');
    expect(shouldOpenFeedbackFromUrl()).toBe(false);
  });

  it('extracts user profile details from URL params into prefill', () => {
    window.history.pushState(
      {},
      '',
      '/?feedback=open&step=3&email=rider%40example.com&firstName=Pierre&lastName=Martin&country=FR',
    );

    const prefill = getFeedbackPrefillFromUrl();
    expect(prefill).toEqual({
      stepIndex: 2,
      email: 'rider@example.com',
      firstName: 'Pierre',
      lastName: 'Martin',
      country: 'FR',
    });
  });

  it('cleans feedback URL parameters without reloading page', () => {
    window.history.pushState(
      {},
      '',
      '/?feedback=open&step=3&email=test%40example.com#feedback',
    );

    const replaceStateSpy = jest.spyOn(window.history, 'replaceState');

    cleanFeedbackUrlParams();

    expect(replaceStateSpy).toHaveBeenCalledWith(
      expect.anything(),
      '',
      '/',
    );

    replaceStateSpy.mockRestore();
  });
});
