'use client';

import { useLingui } from '@lingui/react';
import { styled } from '@linaria/react';

import { mediaUp, spacing } from '@/tokens';
import { ChipMultiSelect, Field, Select } from '@/ui';

import {
  ADDITIONAL_SPORTS_OPTIONS,
  ANNUAL_VOLUME_OPTIONS,
  EXPERIENCE_LEVEL_OPTIONS,
  PRIMARY_SPORT_OPTIONS,
} from '../../data/user-feedback-options';
import { type UserFeedbackController } from '../../use-user-feedback-state';
import { USER_FEEDBACK_COPY } from '../../user-feedback-copy';

const TwoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4)};

  ${mediaUp('md')} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const FIELDS = USER_FEEDBACK_COPY.fields;

export function SportsStep({
  controller,
}: {
  controller: UserFeedbackController;
}) {
  const { i18n } = useLingui();
  const { setField, state, toggleAdditionalSport } = controller;

  const primarySportOptions = PRIMARY_SPORT_OPTIONS.map((option) => ({
    label: i18n._(option.label),
    value: option.value,
  }));

  const experienceOptions = EXPERIENCE_LEVEL_OPTIONS.map((option) => ({
    label: i18n._(option.label),
    value: option.value,
  }));

  const volumeOptions = ANNUAL_VOLUME_OPTIONS.map((option) => ({
    label: i18n._(option.label),
    value: option.value,
  }));

  const additionalSportsOptions = ADDITIONAL_SPORTS_OPTIONS.map((option) => ({
    label: i18n._(option.label),
    value: option.value,
  }));

  return (
    <>
      <TwoCol>
        <Field label={i18n._(FIELDS.primarySport)}>
          <Select
            ariaLabel={i18n._(FIELDS.primarySport)}
            invalid={state.fieldErrors.primarySport !== undefined}
            onValueChange={(value) => setField('primarySport', value)}
            options={primarySportOptions}
            placeholder={i18n._(FIELDS.primarySportPlaceholder)}
            scheme="dark"
            value={state.primarySport}
          />
        </Field>
        <Field label={i18n._(FIELDS.level)}>
          <Select
            ariaLabel={i18n._(FIELDS.level)}
            invalid={state.fieldErrors.level !== undefined}
            onValueChange={(value) => setField('level', value)}
            options={experienceOptions}
            placeholder={i18n._(FIELDS.levelPlaceholder)}
            scheme="dark"
            value={state.level}
          />
        </Field>
      </TwoCol>

      <Field label={i18n._(FIELDS.annualVolume)}>
        <Select
          ariaLabel={i18n._(FIELDS.annualVolume)}
          invalid={state.fieldErrors.annualVolume !== undefined}
          onValueChange={(value) => setField('annualVolume', value)}
          options={volumeOptions}
          placeholder={i18n._(FIELDS.annualVolumePlaceholder)}
          scheme="dark"
          value={state.annualVolume}
        />
      </Field>

      <Field
        hint={i18n._(FIELDS.additionalSportsHint)}
        label={i18n._(FIELDS.additionalSports)}
      >
        <ChipMultiSelect
          ariaLabel={i18n._(FIELDS.additionalSports)}
          onToggle={toggleAdditionalSport}
          options={additionalSportsOptions}
          values={state.additionalSports}
        />
      </Field>
    </>
  );
}
