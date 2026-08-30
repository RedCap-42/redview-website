import { styled } from '@linaria/react';
import { msg } from '@lingui/core/macro';

import { getServerI18n } from '@/platform/i18n/get-server-i18n';
import { HERO_COMPOSITION, mediaUp } from '@/tokens';
import { Body, Heading, HeadingPair, SectionShell } from '@/ui';

import { WhyRedViewVisual } from './WhyRedViewVisual';

const IntroStack = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
`;

const HeadingMeasure = styled.div`
  max-width: 360px;
  width: 100%;

  ${mediaUp('md')} {
    max-width: 672px;
  }
`;

const BodyMeasure = styled.div`
  margin-inline: auto;
  max-width: 360px;

  ${mediaUp('md')} {
    max-width: 443px;
  }
`;

const VisualStage = styled.div`
  margin-top: ${HERO_COMPOSITION.ctaToVisualGapPx}px;
  width: 100%;
`;

export function WhyRedViewHero() {
  const i18n = getServerI18n();

  return (
    <SectionShell rhythm="hero" scheme="dark">
      <IntroStack>
        <HeadingPair>
          <HeadingMeasure>
            <Heading as="h1" size="lg" weight="light">
              {i18n._(
                msg`La précision du terrain, *la maîtrise de chaque trace.*`,
              )}
            </Heading>
          </HeadingMeasure>
          <BodyMeasure>
            <Body muted size="sm">
              {i18n._(
                msg`La planification classique se limitait à tracer des lignes sur une carte 2D. RedView analyse la qualité réelle des sols, inspecte la technicité en LiDAR 20 cm, extrait vos POIs vitaux et compare vos variantes d'itinéraires sur une seule interface 3D.`,
              )}
            </Body>
          </BodyMeasure>
        </HeadingPair>
      </IntroStack>
      <VisualStage>
        <WhyRedViewVisual />
      </VisualStage>
    </SectionShell>
  );
}
