import { msg } from '@lingui/core/macro';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { IconCompass, IconUser } from '@tabler/icons-react';
import NextImage from 'next/image';

import { getServerI18n } from '@/platform/i18n/get-server-i18n';
import { SITE_URLS } from '@/platform/site-urls';
import {
  color,
  FONT_WEIGHT,
  fontFamily,
  fontSize,
  mediaUp,
  radius,
  spacing,
} from '@/tokens';
import {
  Eyebrow,
  Heading,
  SectionIntro,
  SectionShell,
  SectionStack,
} from '@/ui';

const centeredIntroClassName = css`
  ${mediaUp('md')} {
    justify-items: center;
    margin-inline: auto;
    max-width: 900px;
    text-align: center;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  gap: ${spacing(4)};
  grid-template-columns: 1fr;
  margin-inline: auto;
  max-width: 480px;
  width: 100%;

  ${mediaUp('md')} {
    gap: ${spacing(6)};
    grid-template-columns: repeat(2, 1fr);
    max-width: 960px;
  }
`;

const CardContainer = styled.a`
  background-color: ${color('black-5')};
  border: 1px solid ${color('black-20')};
  border-radius: ${radius(2)};
  color: inherit;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 0;
  overflow: hidden;
  text-decoration: none;
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: ${color('black-40')};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
`;

const CardImage = styled.div`
  box-sizing: border-box;
  padding: ${spacing(4)} ${spacing(4)} 0;
  width: 100%;
`;

const SCENE_DESIGN_WIDTH_PX = 411;
const SCENE_DESIGN_HEIGHT_PX = 380;

const CardImageFrame = styled.div`
  aspect-ratio: ${SCENE_DESIGN_WIDTH_PX} / ${SCENE_DESIGN_HEIGHT_PX};
  background-color: ${color('black-10')};
  border-radius: 2px;
  isolation: isolate;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${spacing(3.5)} ${spacing(4)} ${spacing(5)};

  & > * + * {
    margin-top: ${spacing(2.5)};
  }
`;

const CardTitleRow = styled.div`
  align-items: center;
  column-gap: ${spacing(2)};
  display: flex;
  min-height: 28px;
`;

const IconMarker = styled.div`
  align-items: center;
  background: ${color('blue')};
  border-radius: ${radius(1)};
  color: ${color('white')};
  display: flex;
  flex-shrink: 0;
  height: 22px;
  justify-content: center;
  width: 22px;
`;

const CardHeading = styled.h3`
  color: ${color('black')};
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(3.75)};
  font-weight: ${FONT_WEIGHT.medium};
  line-height: ${spacing(5)};
  margin: 0;
`;

const CardBodyText = styled.p`
  color: ${color('black-70')};
  font-family: ${fontFamily('sans')};
  font-size: ${fontSize(3.25)};
  line-height: ${spacing(5)};
  margin: 0;
`;

const FOUNDERS = [
  {
    icon: 'user' as const,
    heading: msg`Victor — Ultra-Endurance & Design`,
    href: SITE_URLS.instagramVictor,
    photoSrc: '/images/team/victor.png',
    alt: msg`Portrait de Victor, cofondateur de RedView — Athlète d'ultra-endurance et designer`,
    body: msg`Victor est un cycliste d'ultra-endurance animé par un besoin constant de création et d'exploration. Designer de formation, il aborde chaque projet avec une exigence radicale et une attention absolue au détail. Pour remporter ses courses, il a dû développer ses propres outils et stratégies logistiques afin d'optimiser chaque paramètre de sa préparation. Après des années de compétition et plus de 20 000 kilomètres de bikepacking, Redview est l'aboutissement de cette démarche. C'est le moyen de partager enfin avec la communauté l'expertise et la précision qu'il a accumulées sur le terrain.`,
  },
  {
    icon: 'compass' as const,
    heading: msg`Simon — Architecture & Moteur 3D`,
    href: SITE_URLS.instagramSimon,
    photoSrc: '/images/team/simon.png',
    alt: msg`Portrait de Simon, cofondateur et architecte du moteur cartographique 3D de RedView`,
    body: msg`Simon est là pour bousculer les standards. À seulement 17 ans, il est l'architecte technique et le développeur derrière Redview. Tout est parti d'un constat frustrant : avoir accès à de la donnée géographique brute d'une valeur inestimable, mais aucun outil pour l'exploiter efficacement et éviter les erreurs de navigation en montagne. Refusant le compromis habituel entre accessibilité et précision, il a conçu un moteur capable de traiter des données topographiques au demi-mètre près directement dans un navigateur standard.`,
  },
];

export function FeatureCards() {
  const i18n = getServerI18n();

  return (
    <SectionShell scheme="light">
      <SectionStack>
        <SectionIntro className={centeredIntroClassName}>
          <Eyebrow>
            {i18n._(msg`L'histoire & les fondateurs`)}
          </Eyebrow>
          <Heading as="h2" size="lg" weight="light">
            {i18n._(msg`Qui *sommes-nous ?*`)}
          </Heading>
        </SectionIntro>
        <CardsGrid>
          {FOUNDERS.map((founder) => (
            <CardContainer
              key={founder.photoSrc}
              href={founder.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardImage>
                <CardImageFrame>
                  <NextImage
                    alt={i18n._(founder.alt)}
                    fill
                    sizes={`(max-width: 768px) 100vw, ${SCENE_DESIGN_WIDTH_PX}px`}
                    src={founder.photoSrc}
                    style={{ objectFit: 'cover' }}
                  />
                </CardImageFrame>
              </CardImage>
              <CardContent>
                <CardTitleRow>
                  <IconMarker aria-hidden>
                    {founder.icon === 'user' ? (
                      <IconUser size={14} stroke={2} />
                    ) : (
                      <IconCompass size={14} stroke={2} />
                    )}
                  </IconMarker>
                  <CardHeading>{i18n._(founder.heading)}</CardHeading>
                </CardTitleRow>
                <CardBodyText>{i18n._(founder.body)}</CardBodyText>
              </CardContent>
            </CardContainer>
          ))}
        </CardsGrid>
      </SectionStack>
    </SectionShell>
  );
}