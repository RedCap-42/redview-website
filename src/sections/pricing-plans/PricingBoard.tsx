'use client';

import { styled } from '@linaria/react';
import { useState } from 'react';

import { mediaUp, spacing } from '@/tokens';

import { BillingToggle } from './BillingToggle';
import { PlanCard } from './PlanCard';
import { PLANS_DATA, type PlansBillingPeriod } from './plans-data';
import { usePricingState } from '@/pricing-state';

const Board = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: ${spacing(4)};
  width: 100%;

  ${mediaUp('md')} {
    margin-top: ${spacing(5)};
  }
`;

const ControlsRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: ${spacing(4)};
  row-gap: ${spacing(4)};
  width: 100%;

  ${mediaUp('md')} {
    column-gap: ${spacing(5)};
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: ${spacing(5)};
    row-gap: 0;
  }
`;

export function PricingBoard() {
  const [billing, setBilling] = useState<PlansBillingPeriod>('yearly');
  const { hosting } = usePricingState();

  const maxBullets = Math.max(
    PLANS_DATA.pro.cells[hosting][billing].featureBullets.length,
    PLANS_DATA.organization.cells[hosting][billing].featureBullets.length,
    PLANS_DATA.enterprise.cells[hosting][billing].featureBullets.length,
  );

  return (
    <Board>
      <ControlsRow>
        <BillingToggle billing={billing} onBillingChange={setBilling} />
      </ControlsRow>
      <CardsGrid>
        <PlanCard
          billing={billing}
          hosting={hosting}
          maxBullets={maxBullets}
          tierId="pro"
        />
        <PlanCard
          billing={billing}
          highlighted
          hosting={hosting}
          maxBullets={maxBullets}
          tierId="organization"
        />
        <PlanCard
          billing={billing}
          hosting={hosting}
          maxBullets={maxBullets}
          tierId="enterprise"
        />
      </CardsGrid>
    </Board>
  );
}
