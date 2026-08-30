'use client';

import { useLingui } from '@lingui/react';
import { styled } from '@linaria/react';
import { type ChangeEvent } from 'react';

import {
  color,
  FONT_WEIGHT,
  fontFamily,
  fontSize,
  mediaUp,
  radius,
  semanticColor,
  spacing,
} from '@/tokens';
import { Field, Select, TextareaField } from '@/ui';

import {
  FEATURE_OPTIONS,
  FEEDBACK_CATEGORY_OPTIONS,
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

const DropzoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;

const Dropzone = styled.label`
  align-items: center;
  background: rgba(255, 255, 255, 0.02);
  border: 1px dashed ${semanticColor.lineStrong};
  border-radius: ${radius(2)};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: ${spacing(1.5)};
  justify-content: center;
  padding: ${spacing(4)} ${spacing(3)};
  text-align: center;
  transition: border-color 0.15s ease, background 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: ${semanticColor.ink};
  }
`;

const DropzoneText = styled.span`
  color: ${semanticColor.ink};
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(3.5)};
  font-weight: ${FONT_WEIGHT.medium};
`;

const DropzoneSubtext = styled.span`
  color: ${semanticColor.inkMuted};
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(3)};
`;

const AttachmentsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing(2)};
  margin-top: ${spacing(1)};
`;

const AttachmentTag = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${semanticColor.lineStrong};
  border-radius: ${radius(2)};
  color: ${semanticColor.ink};
  display: flex;
  font-family: ${fontFamily('mono')};
  font-size: ${fontSize(3)};
  gap: ${spacing(2)};
  padding: ${spacing(1)} ${spacing(2.5)};
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: ${semanticColor.inkMuted};
  cursor: pointer;
  font-size: ${fontSize(3.5)};
  line-height: 1;
  padding: 0;

  &:hover {
    color: ${color('white')};
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const FIELDS = USER_FEEDBACK_COPY.fields;

export function FeedbackStep({
  controller,
}: {
  controller: UserFeedbackController;
}) {
  const { i18n } = useLingui();
  const { addAttachment, removeAttachment, setField, state } = controller;

  const featureOptions = FEATURE_OPTIONS.map((option) => ({
    label: i18n._(option.label),
    value: option.value,
  }));

  const categoryOptions = FEEDBACK_CATEGORY_OPTIONS.map((option) => ({
    label: i18n._(option.label),
    value: option.value,
  }));

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file) {
          addAttachment(file.name);
        }
      }
    }
  };

  return (
    <>
      <TwoCol>
        <Field label={i18n._(FIELDS.feature)}>
          <Select
            ariaLabel={i18n._(FIELDS.feature)}
            invalid={state.fieldErrors.feature !== undefined}
            onValueChange={(value) => setField('feature', value)}
            options={featureOptions}
            placeholder={i18n._(FIELDS.featurePlaceholder)}
            scheme="dark"
            value={state.feature}
          />
        </Field>
        <Field label={i18n._(FIELDS.feedbackType)}>
          <Select
            ariaLabel={i18n._(FIELDS.feedbackType)}
            invalid={state.fieldErrors.feedbackType !== undefined}
            onValueChange={(value) => setField('feedbackType', value)}
            options={categoryOptions}
            placeholder={i18n._(FIELDS.feedbackTypePlaceholder)}
            scheme="dark"
            value={state.feedbackType}
          />
        </Field>
      </TwoCol>

      <Field
        hint={i18n._(FIELDS.descriptionHint)}
        label={i18n._(FIELDS.description)}
      >
        <TextareaField
          ariaLabel={i18n._(FIELDS.description)}
          invalid={state.fieldErrors.description !== undefined}
          name="description"
          onValueChange={(value) => setField('description', value)}
          placeholder={i18n._(FIELDS.descriptionPlaceholder)}
          value={state.description}
        />
      </Field>

      <Field
        hint={i18n._(FIELDS.attachmentsHint)}
        label={i18n._(FIELDS.attachments)}
      >
        <DropzoneContainer>
          <Dropzone>
            <HiddenFileInput
              accept="image/*,.gpx,.fit,.tcx,.json"
              multiple
              onChange={handleFileChange}
              type="file"
            />
            <DropzoneText>{i18n._(FIELDS.uploadClickOrDrag)}</DropzoneText>
            <DropzoneSubtext>{i18n._(FIELDS.uploadSubtext)}</DropzoneSubtext>
          </Dropzone>

          {state.attachmentNames.length > 0 && (
            <AttachmentsList>
              {state.attachmentNames.map((name) => (
                <AttachmentTag key={name}>
                  <span>{name}</span>
                  <RemoveButton
                    aria-label={i18n._(FIELDS.removeFile)}
                    onClick={() => removeAttachment(name)}
                    type="button"
                  >
                    ×
                  </RemoveButton>
                </AttachmentTag>
              ))}
            </AttachmentsList>
          )}
        </DropzoneContainer>
      </Field>
    </>
  );
}
