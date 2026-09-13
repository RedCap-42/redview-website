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
  spacing,
} from '@/tokens';

const BadgeTrack = styled.div`
  align-items: center;
  background-color: ${color('white')};
  border: 1px solid ${color('black-10')};
  border-radius: ${radius(20)};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  display: inline-flex;
  gap: ${spacing(1.5)};
  margin-inline: auto;
  max-width: 100%;
  padding: 6px 14px;
  position: relative;
`;

const StatusDot = styled.span`
  background-color: ${color('blue')};
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
  height: 6px;
  width: 6px;
`;

const BadgeText = styled.span`
  color: ${color('black-70')};
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(3)};
  font-weight: ${FONT_WEIGHT.medium};
  letter-spacing: 0.01em;
  line-height: 1;
  user-select: none;
  white-space: nowrap;

  ${mediaUp('md')} {
    font-size: ${fontSize(3.5)};
  }
`;

export function BillingToggle() {
  const { i18n } = useLingui();

  return (
    <BadgeTrack aria-label={i18n._(msg`Formule de soutien`)}>
      <StatusDot />
      <BadgeText>{i18n._(msg`Offre Pionniers Bêta · Paiement unique sans abonnement`)}</BadgeText>
    </BadgeTrack>
  );
}
