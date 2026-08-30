import { msg } from '@lingui/core/macro';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { getServerI18n } from '@/platform/i18n/get-server-i18n';
import { mediaUp, BREAKPOINT_PX } from '@/tokens';
import {
  Body,
  Eyebrow,
  Heading,
  HeadingPair,
  SectionIntro,
  SectionShell,
  SectionStack,
} from '@/ui';

import { CardsGrid } from './CardsGrid';
import { IllustrationCard } from './IllustrationCard';
import { ILLUSTRATION_CARDS } from './three-cards.data';

// This heading tracks its sans accents lighter than the global -0.04em —
// ported from the original.
const headingMeasureClassName = css`
  ${mediaUp('md')} {
    max-width: ${BREAKPOINT_PX.md}px;
  }

  [data-accent] {
    letter-spacing: -0.02em;
  }
`;

const BodyMeasure = styled.div`
  ${mediaUp('md')} {
    max-width: 571px;
  }
`;

export function ThreeCards() {
  const i18n = getServerI18n();

  return (
    <SectionShell scheme="light">
      <SectionStack>
        <SectionIntro>
          <Eyebrow>{i18n._(msg`Ne faites plus de compromis.`)}</Eyebrow>
          <HeadingPair>
            <div className={headingMeasureClassName}>
              <Heading as="h2" size="lg" weight="light">
                {i18n._(
                  msg`Préparez, explorez et sécurisez *vos aventures avec une précision absolue*`,
                )}
              </Heading>
            </div>
            <BodyMeasure>
              <Body muted size="sm">
                {i18n._(
                  msg`Une suite géospatiale 3D réunissant relief submétrique, analyses topographiques et données atmosphériques en direct.`,
                )}
              </Body>
            </BodyMeasure>
          </HeadingPair>
        </SectionIntro>
        <CardsGrid>
          {ILLUSTRATION_CARDS.map((card) => (
            <IllustrationCard card={card} key={card.illustration} />
          ))}
        </CardsGrid>
      </SectionStack>
    </SectionShell>
  );
}
