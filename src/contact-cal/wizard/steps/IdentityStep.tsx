'use client';

import { useLingui } from '@lingui/react';
import { styled } from '@linaria/react';

import { mediaUp, spacing } from '@/tokens';
import { Field, Select, TextField } from '@/ui';

import { COUNTRY_OPTIONS } from '../../data/user-feedback-options';
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

export function IdentityStep({
  controller,
}: {
  controller: UserFeedbackController;
}) {
  const { i18n } = useLingui();
  const { setField, state } = controller;

  const countrySelectOptions = COUNTRY_OPTIONS.map((option) => ({
    label: i18n._(option.label),
    value: option.value,
  }));

  return (
    <>
      <TwoCol>
        <Field label={i18n._(FIELDS.firstName)}>
          <TextField
            ariaLabel={i18n._(FIELDS.firstName)}
            invalid={state.fieldErrors.firstName !== undefined}
            name="firstName"
            onValueChange={(value) => setField('firstName', value)}
            placeholder={i18n._(FIELDS.firstNamePlaceholder)}
            value={state.firstName}
          />
        </Field>
        <Field label={i18n._(FIELDS.lastName)}>
          <TextField
            ariaLabel={i18n._(FIELDS.lastName)}
            invalid={state.fieldErrors.lastName !== undefined}
            name="lastName"
            onValueChange={(value) => setField('lastName', value)}
            placeholder={i18n._(FIELDS.lastNamePlaceholder)}
            value={state.lastName}
          />
        </Field>
      </TwoCol>

      <Field hint={i18n._(FIELDS.emailHint)} label={i18n._(FIELDS.email)}>
        <TextField
          ariaLabel={i18n._(FIELDS.email)}
          inputMode="email"
          invalid={state.fieldErrors.email !== undefined}
          name="email"
          onValueChange={(value) => setField('email', value)}
          placeholder={i18n._(FIELDS.emailPlaceholder)}
          value={state.email}
        />
      </Field>

      <Field label={i18n._(FIELDS.country)}>
        <Select
          ariaLabel={i18n._(FIELDS.country)}
          invalid={state.fieldErrors.country !== undefined}
          onValueChange={(value) => setField('country', value)}
          options={countrySelectOptions}
          placeholder={i18n._(FIELDS.countryPlaceholder)}
          scheme="dark"
          value={state.country}
        />
      </Field>
    </>
  );
}
