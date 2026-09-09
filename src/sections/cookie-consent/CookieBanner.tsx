'use client';

import { styled } from '@linaria/react';

import { LocalizedLink } from '@/platform/i18n/LocalizedLink';
import {
  color,
  DURATION,
  FONT_WEIGHT,
  fontFamily,
  fontSize,
  mediaUp,
  radius,
  SHADOW,
  spacing,
  Z_INDEX,
} from '@/tokens';

import { useCookieConsent } from './CookieConsentContext';

const BannerWrapper = styled.div`
  bottom: ${spacing(4)};
  inset-inline: ${spacing(4)};
  margin-inline: auto;
  max-width: 1040px;
  position: fixed;
  z-index: ${Z_INDEX.modal};

  ${mediaUp('md')} {
    bottom: ${spacing(6)};
    inset-inline: ${spacing(6)};
  }
`;

const BannerCard = styled.div`
  backdrop-filter: blur(16px);
  background-color: rgba(18, 18, 18, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: ${radius(3)};
  box-shadow: ${SHADOW.popupDark};
  color: ${color('white')};
  display: flex;
  flex-direction: column;
  gap: ${spacing(4)};
  padding: ${spacing(5)};

  ${mediaUp('lg')} {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: ${spacing(5)} ${spacing(6)};
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(1)};
`;

const BannerTitle = styled.div`
  align-items: center;
  color: ${color('white')};
  display: flex;
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(3)};
  font-weight: ${FONT_WEIGHT.medium};
  gap: ${spacing(2)};
`;

const BannerDescription = styled.p`
  color: ${color('white-80')};
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(2)};
  line-height: 1.5;
  max-width: 620px;

  a {
    color: ${color('blue')};
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;

const ActionRow = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: ${spacing(2)};
  width: 100%;

  ${mediaUp('sm')} {
    flex-direction: row;
    justify-content: flex-end;
    width: auto;
  }
`;

const BaseBtn = styled.button`
  align-items: center;
  border-radius: ${radius(1)};
  cursor: pointer;
  display: inline-flex;
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(3)};
  font-weight: ${FONT_WEIGHT.medium};
  height: 38px;
  justify-content: center;
  padding-inline: ${spacing(4)};
  transition:
    background-color ${DURATION.sm} ease-out,
    border-color ${DURATION.sm} ease-out,
    color ${DURATION.sm} ease-out;
  white-space: nowrap;
`;

// Equal prominence buttons as required by CNIL 2025/2026
const RejectButton = styled(BaseBtn)`
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: ${color('white')};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

const CustomizeButton = styled(BaseBtn)`
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: ${color('white-80')};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: ${color('white')};
  }
`;

const AcceptButton = styled(BaseBtn)`
  background-color: ${color('white')};
  border: 1px solid ${color('white')};
  color: ${color('black')};

  &:hover {
    background-color: ${color('white-hover')};
  }
`;

export function CookieBanner() {
  const { acceptAll, isBannerOpen, openPreferences, rejectAll } = useCookieConsent();

  if (!isBannerOpen) {
    return null;
  }

  return (
    <BannerWrapper role="region" aria-label="Gestion des cookies">
      <BannerCard>
        <TextBlock>
          <BannerTitle>
            <span>🍪</span>
            <span>Respect de votre vie privée</span>
          </BannerTitle>
          <BannerDescription>
            RedView utilise des cookies techniques indispensables au rendu 3D et des traceurs de mesure d&apos;audience anonymisés pour optimiser le traitement du relief et des dalles LiDAR. Aucun traceur commercial n&apos;est déposé.{' '}
            <LocalizedLink href="/cookie-policy">
              Consulter notre Politique de Cookies
            </LocalizedLink>.
          </BannerDescription>
        </TextBlock>

        <ActionRow>
          <RejectButton onClick={rejectAll}>Tout refuser</RejectButton>
          <CustomizeButton onClick={openPreferences}>Personnaliser</CustomizeButton>
          <AcceptButton onClick={acceptAll}>Tout accepter</AcceptButton>
        </ActionRow>
      </BannerCard>
    </BannerWrapper>
  );
}
