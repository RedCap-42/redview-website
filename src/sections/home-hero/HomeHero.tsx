import { msg } from '@lingui/core/macro';
import { styled } from '@linaria/react';

import { getServerI18n } from '@/platform/i18n/get-server-i18n';
import { SITE_URLS } from '@/platform/site-urls';
import { GRADIENT, mediaUp, MENU_HEIGHT_PX, spacing } from '@/tokens';
import { Body, Button, Heading, HeadingPair, SectionShell } from '@/ui';

import { HeroBackdrop } from './HeroBackdrop';

const GradientBackdrop = styled.div`
  background: ${GRADIENT.heroGlow};
  inset: 0 -20%;
  position: absolute;
`;

// Full-screen hero viewport positioned higher up so the text stays in the clean space
const HeroViewport = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: calc(100svh - ${MENU_HEIGHT_PX}px);
  padding-top: ${spacing(16)};
  padding-bottom: ${spacing(8)};
  width: 100%;

  ${mediaUp('md')} {
    min-height: calc(100vh - ${MENU_HEIGHT_PX}px);
    padding-top: ${spacing(22)};
    padding-bottom: ${spacing(12)};
  }

  ${mediaUp('lg')} {
    padding-top: ${spacing(26)};
  }
`;

const IntroStack = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;

  & > * + * {
    margin-top: ${spacing(8)};
  }
`;

// Fluid measure: a single cap, approached continuously by the container.
const HeadingMeasure = styled.div`
  max-width: 720px;
  width: 100%;
`;

const BodyMeasure = styled.div`
  margin-inline: auto;
  max-width: 591px;
`;

const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing(3)};
  justify-content: center;
`;

export function HomeHero() {
  const i18n = getServerI18n();

  return (
    <SectionShell
      background={
        <GradientBackdrop>
          <HeroBackdrop />
        </GradientBackdrop>
      }
      fullBleedBackground
      rhythm="flush"
      scheme="muted"
    >
      <HeroViewport>
        <IntroStack data-halftone-exclude="">
          <HeadingPair>
            <HeadingMeasure>
              <Heading as="h1" size="lg" weight="light">
                {i18n._(msg`RedView : *Élargissez votre vision*`)}
              </Heading>
            </HeadingMeasure>
            <BodyMeasure>
              <Body muted size="sm">
                {i18n._(
                  msg`Créer le standard que nous ne trouvions nulle part ailleurs.`,
                )}
              </Body>
            </BodyMeasure>
          </HeadingPair>
          <CtaRow>
            <Button
              href={SITE_URLS.appWelcome}
              label={i18n._(msg`Explorer en 3D`)}
            />
            <Button
              href="/customers"
              label={i18n._(msg`Fonctionnalités`)}
              variant="outlined"
            />
          </CtaRow>
        </IntroStack>
      </HeroViewport>
    </SectionShell>
  );
}
