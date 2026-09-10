'use client';

import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react';
import { styled } from '@linaria/react';

import {
  color,
  FONT_WEIGHT,
  fontFamily,
  fontSize,
  mediaUp,
  radius,
  REDUCED_MOTION,
  spacing,
} from '@/tokens';

const ToggleTrack = styled.div`
  align-items: center;
  background-color: ${color('black-5')};
  border-radius: ${radius(20)};
  display: inline-flex;
  margin-inline: auto;
  max-width: 100%;
  padding: 3px;
  position: relative;
`;

const ToggleOption = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: ${radius(20)};
  color: ${color('black-60')};
  cursor: pointer;
  display: inline-flex;
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(3)};
  font-weight: ${FONT_WEIGHT.medium};
  height: 32px;
  justify-content: center;
  line-height: 1;
  padding-inline: ${spacing(3.5)};
  position: relative;
  text-align: center;
  transition:
    background-color 0.2s cubic-bezier(0.16, 1, 0.3, 1),
    color 0.2s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  user-select: none;
  white-space: nowrap;

  ${mediaUp('md')} {
    font-size: ${fontSize(3.5)};
    height: 34px;
    padding-inline: ${spacing(4.5)};
  }

  &[data-active] {
    background-color: ${color('white')};
    box-shadow:
      0 1px 3px rgba(0, 0, 0, 0.08),
      0 1px 2px rgba(0, 0, 0, 0.04);
    color: ${color('black')};
  }

  &:not([data-active]):hover {
    color: ${color('black')};
  }

  ${REDUCED_MOTION} {
    transition: none;
  }
`;

export function BillingToggle() {
  const { i18n } = useLingui();

  return (
    <ToggleTrack aria-label={i18n._(msg`Formule de soutien`)}>
      <ToggleOption
        aria-checked="true"
        data-active=""
        data-period="yearly"
        role="button"
        type="button"
      >
        {i18n._(msg`Pass Unique`)}
      </ToggleOption>
    </ToggleTrack>
  );
}
