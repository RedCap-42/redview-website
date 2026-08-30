import { styled } from '@linaria/react';

import { GRADIENT, mediaUp, spacing } from '@/tokens';
import { SectionShell } from '@/ui';

import { PricingBoard } from './PricingBoard';
import { PricingIntro } from './PricingIntro';

const GradientBackdrop = styled.div`
  background: ${GRADIENT.heroGlow};
  inset: 0 -20%;
  position: absolute;
`;

const PlansStack = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  padding-block: ${spacing(3)} ${spacing(8)};
  width: 100%;

  ${mediaUp('md')} {
    padding-block: ${spacing(4)} ${spacing(10)};
  }
`;

const IntroSlot = styled.div`
  text-align: center;
`;

export function PricingPlans() {
  return (
    <SectionShell
      background={<GradientBackdrop />}
      rhythm="flush"
      scheme="muted"
    >
      <PlansStack>
        <IntroSlot>
          <PricingIntro />
        </IntroSlot>
        <PricingBoard />
      </PlansStack>
    </SectionShell>
  );
}
