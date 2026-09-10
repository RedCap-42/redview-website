import { msg } from '@lingui/core/macro';
import { Trans } from '@lingui/react/macro';
import { styled } from '@linaria/react';
import NextImage from 'next/image';
import { type CSSProperties } from 'react';

import {
  DURATION,
  EASING,
  FONT_WEIGHT,
  fontFamily,
  fontSize,
  mediaUp,
  radius,
  REDUCED_MOTION,
  type Scheme,
  semanticColor,
  spacing,
} from '@/tokens';
import { getServerI18n } from '@/platform/i18n/get-server-i18n';
import { CornerMarkers, SectionShell } from '@/ui';

import { GpuChipIcon } from './TechIcons';
import { TECH_LOGOS, type TechLogo } from './trusted-by.data';

const Card = styled.div`
  align-items: stretch;
  background-color: ${semanticColor.surface};
  border: 1px solid ${semanticColor.line};
  border-radius: ${radius(2)};
  display: flex;
  flex-direction: column;
  padding: 0 ${spacing(4)};
  position: relative;

  ${mediaUp('md')} {
    flex-direction: row;
    padding: 0 ${spacing(6)};
  }

  ${mediaUp('lg')} {
    padding: 0 ${spacing(8)};
  }
`;

// Tripartite cell structure on both axes: stacked with horizontal
// hairlines below md, a row with vertical hairlines above it.
const Cell = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding-block: ${spacing(4)};

  & + & {
    border-top: 1px solid ${semanticColor.line};
  }

  ${mediaUp('md')} {
    padding-block: ${spacing(4.5)};

    & + & {
      border-left: 1px solid ${semanticColor.line};
      border-top: none;
    }
  }
`;

const LabelCell = styled(Cell)`
  flex-shrink: 0;
  gap: ${spacing(2)};
  z-index: 1;

  ${mediaUp('md')} {
    padding-right: ${spacing(6)};
  }
`;

const StatusDot = styled.span`
  background-color: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.45);
  display: inline-block;
  height: 6px;
  width: 6px;
`;

const LogosCell = styled(Cell)`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  padding-block: ${spacing(4)};
  position: relative;

  /* Subtle gradient fade on the carousel edges */
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 6%,
    black 94%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 6%,
    black 94%,
    transparent 100%
  );

  ${mediaUp('md')} {
    padding-inline: ${spacing(4)};
  }
`;

const MetricCell = styled(Cell)`
  color: ${semanticColor.inkMuted};
  flex-shrink: 0;
  gap: ${spacing(2)};
  z-index: 1;

  ${mediaUp('md')} {
    padding-left: ${spacing(6)};
  }
`;

const MonoLabel = styled.span`
  color: ${semanticColor.inkMuted};
  font-family: ${fontFamily('mono')};
  font-size: ${fontSize(3)};
  font-weight: ${FONT_WEIGHT.medium};
  letter-spacing: 0;
  line-height: 1;
  text-transform: uppercase;
  white-space: nowrap;
`;

const MARQUEE_REPEAT_PER_HALF = 3;
const REPEAT_INDICES = Array.from(
  { length: MARQUEE_REPEAT_PER_HALF },
  (_, index) => index,
);

const TrackHalf = styled.div`
  align-items: center;
  display: flex;
  flex-shrink: 0;
`;

const MarqueeTrack = styled.div`
  align-items: center;
  display: flex;
  width: max-content;

  @keyframes techStackMarquee {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-50%, 0, 0);
    }
  }

  animation: techStackMarquee 36s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  ${REDUCED_MOTION} {
    animation: none;
  }
`;

const LogoGroup = styled.div`
  align-items: center;
  column-gap: ${spacing(7)};
  display: flex;
  flex-shrink: 0;
  padding-right: ${spacing(7)};

  ${mediaUp('md')} {
    column-gap: ${spacing(8)};
    padding-right: ${spacing(8)};
  }
`;

const LogoFrame = styled.span`
  cursor: default;
  display: inline-block;
  flex-shrink: 0;
  height: calc(var(--logo-h) * var(--logo-scale, 1) * 1px);
  position: relative;
  transition:
    transform ${DURATION.xs} ${EASING.standard},
    opacity ${DURATION.xs} ${EASING.gentle};

  img {
    transition:
      filter ${DURATION.xs} ${EASING.gentle},
      opacity ${DURATION.xs} ${EASING.gentle};
  }

  &:hover {
    transform: translateY(-1px);

    img {
      filter: grayscale(0) !important;
      opacity: 1 !important;
    }
  }
`;

function Logo({
  aspectRatio,
  grayBrightness = 1,
  grayOpacity = 0.75,
  heightPx,
  name,
  src,
}: TechLogo) {
  return (
    <LogoFrame
      style={
        {
          aspectRatio: String(aspectRatio),
          '--logo-h': heightPx,
        } as CSSProperties
      }
      title={name}
    >
      <NextImage
        alt={`Technologie ${name} intégrée au moteur 3D RedView`}
        fill
        sizes={`${Math.ceil(heightPx * aspectRatio)}px`}
        src={src}
        style={{
          filter: `grayscale(1) brightness(${grayBrightness})`,
          objectFit: 'contain',
          opacity: grayOpacity,
        }}
        unoptimized
      />
    </LogoFrame>
  );
}

export function TrustedBy({ scheme = 'light' }: { scheme?: Scheme }) {
  const i18n = getServerI18n();

  const renderHalf = (halfKey: string) => (
    <TrackHalf key={halfKey}>
      {REPEAT_INDICES.map((repeatIndex) => (
        <LogoGroup key={`${halfKey}-${repeatIndex}`}>
          {TECH_LOGOS.map((logo) => (
            <Logo key={`${halfKey}-${repeatIndex}-${logo.src}`} {...logo} />
          ))}
        </LogoGroup>
      ))}
    </TrackHalf>
  );

  return (
    <SectionShell
      ariaLabel={i18n._(msg`Technologies et architecture de pointe`)}
      scheme={scheme}
    >
      <Card>
        <CornerMarkers />
        <LabelCell>
          <StatusDot />
          <MonoLabel>
            <Trans>TECH STACK 3D</Trans>
          </MonoLabel>
        </LabelCell>
        <LogosCell>
          <MarqueeTrack>
            {renderHalf('first')}
            {renderHalf('second')}
          </MarqueeTrack>
        </LogosCell>
        <MetricCell>
          <GpuChipIcon sizePx={15} />
          <MonoLabel>
            <Trans>ACCÉLÉRATION GPU · 60 FPS</Trans>
          </MonoLabel>
        </MetricCell>
      </Card>
    </SectionShell>
  );
}
