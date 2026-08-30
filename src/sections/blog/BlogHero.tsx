import { styled } from '@linaria/react';
import { msg } from '@lingui/core/macro';

import { getServerI18n } from '@/platform/i18n/get-server-i18n';
import { GRADIENT, mediaUp, spacing } from '@/tokens';
import { Body, Eyebrow, Heading, HeadingPair, SectionShell } from '@/ui';

const GradientBackdrop = styled.div`
  background: ${GRADIENT.heroGlow};
  inset: 0 -20%;
  position: absolute;
`;

const IntroStack = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;

  & > * + * {
    margin-top: ${spacing(4)};
  }
`;

const HeadingMeasure = styled.div`
  max-width: 480px;
  width: 100%;

  ${mediaUp('md')} {
    max-width: 760px;
  }
`;

const BodyMeasure = styled.div`
  margin-inline: auto;
  max-width: 420px;

  ${mediaUp('md')} {
    max-width: 600px;
  }
`;

export function BlogHero() {
  const i18n = getServerI18n();

  return (
    <SectionShell
      background={<GradientBackdrop />}
      rhythm="hero"
      scheme="light"
    >
      <IntroStack>
        <Eyebrow>{i18n._(msg`Blog & Ingénierie 3D`)}</Eyebrow>
        <HeadingPair>
          <HeadingMeasure>
            <Heading as="h1" size="lg" weight="light">
              {i18n._(msg`Analyses, guides &\n*retours d'expérience*`)}
            </Heading>
          </HeadingMeasure>
          <BodyMeasure>
            <Body muted size="sm">
              {i18n._(
                msg`Méthodologies cartographiques, exploitation du LiDAR 20 cm, optimisation de traces GPX et algorithmes prédictifs pour préparer et sécuriser vos expéditions outdoor.`,
              )}
            </Body>
          </BodyMeasure>
        </HeadingPair>
      </IntroStack>
    </SectionShell>
  );
}
