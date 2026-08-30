'use client';

import { styled } from '@linaria/react';
import NextImage from 'next/image';
import { type CSSProperties } from 'react';

import { color, DURATION, EASING, radius, spacing } from '@/tokens';

export type StepperImageSlide = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const STEPPER_CAROUSEL_SLIDES: readonly StepperImageSlide[] = [
  {
    id: 'step-1',
    src: '/images/home/stepper/image3.png',
    alt: 'Types de route et tolérances de surface RedView',
    width: 900,
    height: 600,
  },
  {
    id: 'step-2',
    src: '/images/home/stepper/image1.png',
    alt: 'Paramètres de course FTP, météo et poids système',
    width: 900,
    height: 450,
  },
  {
    id: 'step-3',
    src: '/images/home/stepper/image2.png',
    alt: 'Priorités de profil gravel, dénivelé et distance',
    width: 900,
    height: 400,
  },
];

const CarouselViewport = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  padding: ${spacing(4)};
  position: relative;
  width: 100%;
`;

const SlideStack = styled.div`
  align-items: center;
  display: grid;
  height: 100%;
  justify-items: center;
  max-height: 480px;
  position: relative;
  width: 100%;

  & > * {
    grid-area: 1 / 1;
  }
`;

const SlideItem = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  max-width: 520px;
  opacity: var(--slide-opacity, 0);
  pointer-events: auto;
  transform: var(--slide-transform, translate3d(0, 30px, 0));
  transition:
    opacity ${DURATION.md} ${EASING.gentle},
    transform ${DURATION.md} ${EASING.standard};
  width: 100%;

  img {
    border-radius: ${radius(2)};
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.65);
    display: block;
    height: auto;
    max-height: 380px;
    max-width: 100%;
    object-fit: contain;
  }
`;

const IndicatorsRail = styled.div`
  bottom: ${spacing(3)};
  display: flex;
  gap: ${spacing(2)};
  position: absolute;
  z-index: 10;
`;

const IndicatorDot = styled.span<{ $isActive: boolean }>`
  background-color: ${({ $isActive }) =>
    $isActive ? color('blue') : 'rgba(255, 255, 255, 0.25)'};
  border-radius: 4px;
  display: inline-block;
  height: 4px;
  transition: all ${DURATION.sm} ${EASING.gentle};
  width: ${({ $isActive }) => ($isActive ? '24px' : '8px')};
`;

export type HomeStepperCarouselProps = {
  activeStepIndex: number;
  localProgress?: number;
  scrollProgress?: number;
};

export function HomeStepperCarousel({
  activeStepIndex,
}: HomeStepperCarouselProps) {
  return (
    <CarouselViewport aria-hidden>
      <SlideStack>
        {STEPPER_CAROUSEL_SLIDES.map((slide, index) => {
          let opacity = 0;
          let transform = 'translate3d(0, 40px, 0) scale(0.96)';

          if (index === activeStepIndex) {
            opacity = 1;
            transform = 'translate3d(0, 0, 0) scale(1)';
          } else if (index < activeStepIndex) {
            opacity = 0;
            transform = 'translate3d(0, -40px, 0) scale(0.96)';
          } else {
            opacity = 0;
            transform = 'translate3d(0, 40px, 0) scale(0.96)';
          }

          return (
            <SlideItem
              key={slide.id}
              style={
                {
                  '--slide-opacity': opacity,
                  '--slide-transform': transform,
                } as CSSProperties
              }
            >
              <NextImage
                alt={slide.alt}
                height={slide.height}
                quality={95}
                src={slide.src}
                unoptimized
                width={slide.width}
              />
            </SlideItem>
          );
        })}
      </SlideStack>
      <IndicatorsRail>
        {STEPPER_CAROUSEL_SLIDES.map((slide, index) => (
          <IndicatorDot
            $isActive={index === activeStepIndex}
            key={`dot-${slide.id}`}
          />
        ))}
      </IndicatorsRail>
    </CarouselViewport>
  );
}
