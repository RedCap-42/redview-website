'use client';

import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react';
import { styled } from '@linaria/react';

import { useCookieConsent } from '@/sections/cookie-consent';
import {
  color,
  DURATION,
  fontSize,
  mediaUp,
  semanticColor,
  spacing,
} from '@/tokens';

const ButtonEl = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  color: ${semanticColor.ink};
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-size: ${fontSize(4)};
  gap: 0;
  line-height: 1.35;
  padding: 0;
  text-align: left;
  transition: gap ${DURATION.md} ease-out;

  &:focus-visible {
    outline: 1px solid ${color('blue')};
    outline-offset: 1px;
  }

  ${mediaUp('md')} {
    &:hover {
      gap: ${spacing(2)};
    }

    &:hover [data-slot='hover-marker'] {
      opacity: 1;
      width: 14px;
    }
  }
`;

const HoverMarker = styled.span`
  background-color: ${semanticColor.ink};
  border-radius: 1px;
  display: inline-flex;
  flex-shrink: 0;
  height: 7px;
  opacity: 0;
  transition:
    width ${DURATION.md} ease-out,
    opacity ${DURATION.md} ease-out;
  width: 0;
`;

export function ManageCookiesButton() {
  const { _ } = useLingui();
  const { openPreferences } = useCookieConsent();

  return (
    <ButtonEl onClick={openPreferences} type="button">
      <HoverMarker aria-hidden data-slot="hover-marker" />
      {_(msg`Gestion des cookies`)}
    </ButtonEl>
  );
}
