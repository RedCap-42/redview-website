'use client';

import { useLingui } from '@lingui/react';
import { styled } from '@linaria/react';
import { type FormEvent, useCallback, useEffect } from 'react';

import {
  color,
  fontFamily,
  fontSize,
  radius,
  semanticColor,
  spacing,
} from '@/tokens';
import { Body, Button, Heading, StepIndicator } from '@/ui';

import { USER_FEEDBACK_STEP_IDS } from '../user-feedback-types';
import { USER_FEEDBACK_COPY } from '../user-feedback-copy';
import {
  type UserFeedbackController,
  useUserFeedbackState,
} from '../use-user-feedback-state';
import {
  type UserFeedbackState,
  validateUserFeedbackStep,
} from '../user-feedback-state';
import { UserFeedbackSuccess } from './UserFeedbackSuccess';
import { FeedbackStep } from './steps/FeedbackStep';
import { IdentityStep } from './steps/IdentityStep';
import { SportsStep } from './steps/SportsStep';

export function getFeedbackPrefillFromUrl(): Partial<UserFeedbackState> | null {
  if (typeof window === 'undefined') return null;
  try {
    const params = new URLSearchParams(window.location.search);
    const hash = window.location.hash.toLowerCase();

    const isFeedbackTriggered =
      params.has('feedback') ||
      params.has('formulaire') ||
      params.has('questionnaire') ||
      params.get('modal') === 'feedback' ||
      hash.includes('feedback') ||
      hash.includes('formulaire') ||
      hash.includes('questionnaire');

    const prefill: Partial<UserFeedbackState> = {};

    const email = params.get('email');
    if (email) prefill.email = email;

    const firstName =
      params.get('firstName') ||
      params.get('firstname') ||
      params.get('prenom');
    if (firstName) prefill.firstName = firstName;

    const lastName =
      params.get('lastName') ||
      params.get('lastname') ||
      params.get('nom');
    if (lastName) prefill.lastName = lastName;

    const country = params.get('country') || params.get('pays');
    if (country) prefill.country = country.toUpperCase();

    const feature = params.get('feature');
    if (feature) prefill.feature = feature as any;

    const feedbackType =
      params.get('feedbackType') ||
      params.get('type') ||
      params.get('category');
    if (feedbackType) prefill.feedbackType = feedbackType as any;

    const description = params.get('description');
    if (description) prefill.description = description;

    const step = params.get('step');
    if (
      step === '3' ||
      step === 'feedback' ||
      (isFeedbackTriggered &&
        step !== '1' &&
        step !== '2' &&
        step !== 'identity' &&
        step !== 'sports')
    ) {
      prefill.stepIndex = 2;
    } else if (step === '2' || step === 'sports') {
      prefill.stepIndex = 1;
    } else if (step === '1' || step === 'identity') {
      prefill.stepIndex = 0;
    }

    return Object.keys(prefill).length > 0 ? prefill : null;
  } catch {
    return null;
  }
}

const COPY = USER_FEEDBACK_COPY;
const STEPS = USER_FEEDBACK_STEP_IDS;

const WizardRoot = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: ${spacing(4)};
  }
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: ${spacing(5)};
  }
`;

const IntroGroup = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: ${spacing(2)};
  }
`;

const HeaderStrip = styled.div`
  align-items: center;
  display: flex;
  gap: ${spacing(3)};
  justify-content: space-between;
`;

const HeaderLabel = styled.span`
  color: ${semanticColor.inkMuted};
  font-family: ${fontFamily('mono')};
  font-size: ${fontSize(3)};
  text-transform: uppercase;
`;

const FieldsStack = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: ${spacing(4)};
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: ${spacing(3)};
  }
`;

const SecondaryButton = styled.button`
  background: none;
  border: 1px solid ${semanticColor.lineStrong};
  border-radius: ${radius(2)};
  color: ${semanticColor.ink};
  cursor: pointer;
  font-family: ${fontFamily('mono')};
  font-size: ${fontSize(3)};
  height: ${spacing(10)};
  padding: 0 ${spacing(4)};
  text-transform: uppercase;
  transition: border-color 0.15s ease, background 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: ${semanticColor.ink};
  }
`;

const FooterControls = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ErrorBanner = styled.p`
  color: ${color('white')};
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(3)};
  opacity: 0.85;
`;

function StepRenderer({
  controller,
}: {
  controller: UserFeedbackController;
}) {
  const stepId = STEPS[controller.state.stepIndex];
  switch (stepId) {
    case 'identity':
      return <IdentityStep controller={controller} />;
    case 'sports':
      return <SportsStep controller={controller} />;
    case 'feedback':
      return <FeedbackStep controller={controller} />;
    default: {
      return null;
    }
  }
}

function resolveFieldErrorMessage(
  errorValues: string[],
): (typeof COPY.validation)[keyof typeof COPY.validation] {
  if (errorValues.includes('invalid_email')) {
    return COPY.validation.invalidEmail;
  }
  if (errorValues.includes('too_short')) {
    return COPY.validation.descriptionTooShort;
  }
  return COPY.validation.incompleteForm;
}

export function UserFeedbackWizard({
  onSuccess,
  resetSignal = 0,
}: {
  onSuccess: () => void;
  resetSignal?: number;
}) {
  const { i18n } = useLingui();
  const controller = useUserFeedbackState(getFeedbackPrefillFromUrl());
  const {
    goBack,
    goNext,
    reset,
    setSubmitError,
    setSubmitted,
    setSubmitting,
    state,
  } = controller;

  useEffect(() => {
    const prefill = getFeedbackPrefillFromUrl();
    reset(prefill ?? undefined);
  }, [resetSignal, reset]);

  const stepIndex = state.stepIndex;
  const stepId = STEPS[stepIndex] ?? 'identity';
  const isLastStep = stepIndex === STEPS.length - 1;
  const errorValues = Object.values(state.fieldErrors).filter(
    (value): value is string => value !== undefined,
  );
  const hasFieldErrors = errorValues.length > 0;
  const fieldErrorMessage = resolveFieldErrorMessage(errorValues);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!isLastStep) {
        goNext();
        return;
      }
      if (state.isSubmitting) return;

      setSubmitError(null);

      const validationErrors = validateUserFeedbackStep(state);
      if (Object.keys(validationErrors).length > 0) {
        goNext();
        return;
      }

      setSubmitting(true);

      try {
        // Backend API submission endpoint with graceful fallback
        // When backend is ready, this POST will receive the payload
        const response = await fetch('/api/user-feedback', {
          body: JSON.stringify({
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email,
            country: state.country,
            primarySport: state.primarySport,
            level: state.level,
            annualVolume: state.annualVolume,
            additionalSports: state.additionalSports,
            feature: state.feature,
            feedbackType: state.feedbackType,
            description: state.description,
            attachmentNames: state.attachmentNames,
            submittedAt: new Date().toISOString(),
          }),
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
        }).catch(() => null);

        // If route does not exist yet (404/network error), we still mark submitted as requested
        if (response && !response.ok && response.status !== 404) {
          setSubmitError(i18n._(COPY.validation.submitFailed));
          return;
        }

        // Simulate slight network delay for smooth user experience
        await new Promise((resolve) => setTimeout(resolve, 400));
        setSubmitted();
      } catch {
        setSubmitted();
      } finally {
        setSubmitting(false);
      }
    },
    [
      goNext,
      i18n,
      isLastStep,
      setSubmitError,
      setSubmitted,
      setSubmitting,
      state,
    ],
  );

  if (state.isSubmitted) {
    return <UserFeedbackSuccess onDismiss={onSuccess} />;
  }

  const stepLabel = `${i18n._(
    COPY.stepProgressLabel(stepIndex + 1, STEPS.length),
  )} · ${i18n._(COPY.stepHeaders[stepId])}`;

  return (
    <WizardRoot>
      <TitleBlock>
        {stepIndex === 0 ? (
          <IntroGroup>
            <Heading as="h2" size="lg" weight="light">
              {i18n._(COPY.title)}
            </Heading>
            <Body muted size="md">
              {i18n._(COPY.subtitle)}
            </Body>
          </IntroGroup>
        ) : null}
        <HeaderStrip>
          <HeaderLabel>{stepLabel}</HeaderLabel>
          <StepIndicator activeStepIndex={stepIndex} stepCount={STEPS.length} />
        </HeaderStrip>
      </TitleBlock>

      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <FieldsStack>
          <StepRenderer controller={controller} />
          <Footer>
            {state.submitError !== null ? (
              <ErrorBanner role="alert">{state.submitError}</ErrorBanner>
            ) : null}
            {hasFieldErrors ? (
              <ErrorBanner role="alert">
                {i18n._(fieldErrorMessage)}
              </ErrorBanner>
            ) : null}
            <FooterControls>
              {stepIndex > 0 ? (
                <SecondaryButton onClick={goBack} type="button">
                  {i18n._(COPY.back)}
                </SecondaryButton>
              ) : (
                <span />
              )}
              <Button
                disabled={state.isSubmitting}
                label={
                  isLastStep
                    ? state.isSubmitting
                    ? i18n._(COPY.submitInFlight)
                    : i18n._(COPY.submit)
                    : i18n._(COPY.next)
                }
                type="submit"
                variant="filled"
              />
            </FooterControls>
          </Footer>
        </FieldsStack>
      </form>
    </WizardRoot>
  );
}
