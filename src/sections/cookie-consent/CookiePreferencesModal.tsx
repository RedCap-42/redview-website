'use client';

import { styled } from '@linaria/react';
import { useEffect, useState } from 'react';

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
import { DEFAULT_PREFERENCES } from './cookie-consent-storage';

const Backdrop = styled.div`
  align-items: center;
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  inset: 0;
  justify-content: center;
  padding: ${spacing(4)};
  position: fixed;
  z-index: ${Z_INDEX.modal + 10};
`;

const ModalCard = styled.div`
  background-color: #161616;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: ${radius(4)};
  box-shadow: ${SHADOW.popupDark};
  color: ${color('white')};
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  max-width: 620px;
  overflow-y: auto;
  padding: ${spacing(6)};
  position: relative;
  width: 100%;

  ${mediaUp('md')} {
    padding: ${spacing(8)};
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
  margin-bottom: ${spacing(6)};
`;

const TitleRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.h2`
  color: ${color('white')};
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(6)};
  font-weight: ${FONT_WEIGHT.medium};
  line-height: 1.25;
`;

const CloseButton = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  border-radius: ${radius(1)};
  color: ${color('white-60')};
  cursor: pointer;
  display: flex;
  font-size: 24px;
  height: 32px;
  justify-content: center;
  transition: color ${DURATION.sm} ease-out;
  width: 32px;

  &:hover {
    color: ${color('white')};
  }
`;

const Subtitle = styled.p`
  color: ${color('white-80')};
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(3)};
  line-height: 1.5;
`;

const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4)};
  margin-bottom: ${spacing(8)};
`;

const CategoryCard = styled.div`
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${radius(2)};
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
  padding: ${spacing(4)};
`;

const CategoryHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CategoryTitle = styled.h3`
  align-items: center;
  color: ${color('white')};
  display: flex;
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(4)};
  font-weight: ${FONT_WEIGHT.medium};
  gap: ${spacing(2)};
`;

const AlwaysActiveBadge = styled.span`
  background-color: rgba(56, 189, 248, 0.15);
  border: 1px solid rgba(56, 189, 248, 0.3);
  border-radius: 9999px;
  color: #38bdf8;
  font-family: ${fontFamily('mono')};
  font-size: ${fontSize(1)};
  font-weight: ${FONT_WEIGHT.medium};
  padding: 2px 8px;
  text-transform: uppercase;
`;

const ToggleSwitch = styled.button<{ active: boolean }>`
  align-items: center;
  background-color: ${({ active }) => (active ? color('blue') : 'rgba(255, 255, 255, 0.2)')};
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  display: flex;
  height: 24px;
  padding: 2px;
  position: relative;
  transition: background-color ${DURATION.sm} ease-out;
  width: 44px;

  &::after {
    background-color: ${color('white')};
    border-radius: 50%;
    content: '';
    display: block;
    height: 20px;
    left: ${({ active }) => (active ? '22px' : '2px')};
    position: absolute;
    top: 2px;
    transition: left ${DURATION.sm} ease-out;
    width: 20px;
  }
`;

const CategoryDescription = styled.p`
  color: ${color('white-80')};
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(2)};
  line-height: 1.5;
`;

const ButtonRow = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};

  ${mediaUp('sm')} {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const BaseActionBtn = styled.button`
  align-items: center;
  border-radius: ${radius(1)};
  cursor: pointer;
  display: flex;
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(3)};
  font-weight: ${FONT_WEIGHT.medium};
  justify-content: center;
  padding: ${spacing(3)} ${spacing(5)};
  transition:
    background-color ${DURATION.sm} ease-out,
    border-color ${DURATION.sm} ease-out,
    color ${DURATION.sm} ease-out;
`;

const RejectBtn = styled(BaseActionBtn)`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: ${color('white-80')};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: ${color('white')};
  }
`;

const SaveBtn = styled(BaseActionBtn)`
  background-color: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: ${color('white')};

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
`;

const AcceptAllBtn = styled(BaseActionBtn)`
  background-color: ${color('white')};
  border: 1px solid ${color('white')};
  color: ${color('black')};

  &:hover {
    background-color: ${color('white-hover')};
  }
`;

const LegalLinkNotice = styled.div`
  color: ${color('white-60')};
  font-size: ${fontSize(2)};
  margin-top: ${spacing(4)};
  text-align: center;

  a {
    color: ${color('blue')};
    text-decoration: underline;
  }
`;

export function CookiePreferencesModal() {
  const { closePreferences, consent, isModalOpen, rejectAll, acceptAll, savePreferences } =
    useCookieConsent();

  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    if (consent) {
      setAnalyticsEnabled(consent.categories.analytics);
    } else {
      setAnalyticsEnabled(DEFAULT_PREFERENCES.analytics);
    }
  }, [consent, isModalOpen]);

  if (!isModalOpen) {
    return null;
  }

  const handleSave = () => {
    savePreferences({
      necessary: true,
      analytics: analyticsEnabled,
      functional: false,
    });
  };

  return (
    <Backdrop onClick={closePreferences} role="dialog" aria-modal="true">
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <Header>
          <TitleRow>
            <Title>Préférences des cookies</Title>
            <CloseButton aria-label="Fermer" onClick={closePreferences}>
              &times;
            </CloseButton>
          </TitleRow>
          <Subtitle>
            RedView utilise des cookies techniques pour le fonctionnement 3D et la sécurité. Vous pouvez choisir d&apos;activer ou de désactiver la mesure d&apos;audience anonymisée ci-dessous.
          </Subtitle>
        </Header>

        <CategoryList>
          <CategoryCard>
            <CategoryHeader>
              <CategoryTitle>Cookies techniques essentiels</CategoryTitle>
              <AlwaysActiveBadge>Toujours actif</AlwaysActiveBadge>
            </CategoryHeader>
            <CategoryDescription>
              Indispensables au fonctionnement de la plateforme : maintien de votre session chiffrée, mise en cache des dalles LiDAR 20 cm, mémorisation de vos réglages d&apos;ombrage 3D et conservation de vos choix de consentement. Conformément aux préconisations CNIL, ils ne nécessitent pas de consentement préalable.
            </CategoryDescription>
          </CategoryCard>

          <CategoryCard>
            <CategoryHeader>
              <CategoryTitle>Mesure d&apos;audience & performances</CategoryTitle>
              <ToggleSwitch
                active={analyticsEnabled}
                aria-checked={analyticsEnabled}
                onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                role="switch"
              />
            </CategoryHeader>
            <CategoryDescription>
              Traceurs télémétriques strictement anonymisés permettant d&apos;évaluer la fluidité du moteur de rendu WebGL et le temps de calcul des profils de pente. Aucune donnée n&apos;est transmise à des régies publicitaires.
            </CategoryDescription>
          </CategoryCard>

          <CategoryCard>
            <CategoryHeader>
              <CategoryTitle>Sécurisation des paiements (Stripe)</CategoryTitle>
              <AlwaysActiveBadge>Sécurisé</AlwaysActiveBadge>
            </CategoryHeader>
            <CategoryDescription>
              Traceurs anti-fraude bancaire certifiés PCI-DSS activés uniquement lors des transactions financières de souscription au Pass Fondateur ou de don de soutien.
            </CategoryDescription>
          </CategoryCard>
        </CategoryList>

        <ButtonRow>
          <RejectBtn onClick={rejectAll}>Tout refuser</RejectBtn>
          <SaveBtn onClick={handleSave}>Enregistrer mes choix</SaveBtn>
          <AcceptAllBtn onClick={acceptAll}>Tout accepter</AcceptAllBtn>
        </ButtonRow>

        <LegalLinkNotice>
          En savoir plus dans notre{' '}
          <LocalizedLink href="/cookie-policy" onClick={closePreferences}>
            Politique de Cookies
          </LocalizedLink>{' '}
          et notre{' '}
          <LocalizedLink href="/privacy-policy" onClick={closePreferences}>
            Politique de Confidentialité
          </LocalizedLink>.
        </LegalLinkNotice>
      </ModalCard>
    </Backdrop>
  );
}
