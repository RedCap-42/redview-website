'use client';

import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react';

import { ChipMultiSelect, Field, TextareaField, TextField } from '@/ui';

import { PARTNER_TERRAIN_EXPERIENCE_OPTIONS } from '../../data/partner-terrain-experience-options';
import { PARTNER_APPLICATION_COPY } from '../../partner-application-copy';
import { type PartnerApplicationController } from '../../use-partner-application-state';

const FIELDS = PARTNER_APPLICATION_COPY.fields;

export function ExperienceStep({
  controller,
}: {
  controller: PartnerApplicationController;
}) {
  const { i18n } = useLingui();
  const { setField, state, toggleExperience } = controller;

  const experienceOptions = PARTNER_TERRAIN_EXPERIENCE_OPTIONS.map((option) => ({
    label: i18n._(option.label),
    value: option.value,
  }));

  return (
    <>
      <Field
        hint={i18n._(FIELDS.terrainExperienceHint)}
        label={i18n._(FIELDS.terrainExperience)}
      >
        <ChipMultiSelect
          ariaLabel={i18n._(FIELDS.terrainExperience)}
          invalid={state.fieldErrors.terrainExperience !== undefined}
          onToggle={toggleExperience}
          options={experienceOptions}
          values={state.terrainExperience}
        />
      </Field>
      <Field
        hint={i18n._(FIELDS.terrainExperienceNotesHint)}
        label={i18n._(FIELDS.terrainExperienceNotes)}
      >
        <TextareaField
          ariaLabel={i18n._(FIELDS.terrainExperienceNotes)}
          invalid={state.fieldErrors.terrainExperienceNotes !== undefined}
          name="terrainExperienceNotes"
          onValueChange={(value) => setField('terrainExperienceNotes', value)}
          placeholder={i18n._(FIELDS.terrainExperienceNotesPlaceholder)}
          value={state.terrainExperienceNotes}
        />
      </Field>
      <Field
        hint={i18n._(FIELDS.terrainExperienceProofLinkHint)}
        label={i18n._(FIELDS.terrainExperienceProofLink)}
      >
        <TextField
          ariaLabel={i18n._(FIELDS.terrainExperienceProofLink)}
          inputMode="url"
          invalid={state.fieldErrors.terrainExperienceProofLink !== undefined}
          name="terrainExperienceProofLink"
          onValueChange={(value) =>
            setField('terrainExperienceProofLink', value)
          }
          placeholder={i18n._(msg`https://`)}
          value={state.terrainExperienceProofLink}
        />
      </Field>
    </>
  );
}
