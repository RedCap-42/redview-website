'use client';

import createGlobe, { type Globe } from 'cobe';
import { useEffect, useRef, useState } from 'react';
import { styled } from '@linaria/react';
import { DURATION, EASING } from '@/tokens';

const GlobeContainer = styled.div<{ $isReady: boolean; $heightPx: number }>`
  bottom: 0;
  height: ${({ $heightPx }) => `${$heightPx}px`};
  left: 0;
  opacity: ${({ $isReady }) => ($isReady ? 1 : 0)};
  overflow: hidden;
  pointer-events: auto;
  position: absolute;
  transition: opacity ${DURATION.xl} ${EASING.gentle};
  user-select: none;
  width: 100%;
  z-index: 0;
`;

const GlobeCanvasWrapper = styled.div<{ $canvasWidthPx: number; $topOffsetPx: number }>`
  height: ${({ $canvasWidthPx }) => `${$canvasWidthPx}px`};
  left: 50%;
  position: absolute;
  top: ${({ $topOffsetPx }) => `${-$topOffsetPx}px`};
  transform: translateX(-50%);
  width: ${({ $canvasWidthPx }) => `${$canvasWidthPx}px`};
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  canvas {
    display: block;
    height: 100%;
    width: 100%;
    outline: none;
    filter: url(#cobeRedDotsOnly);
  }
`;

const BottomFade = styled.div`
  background: linear-gradient(to top, rgba(244, 244, 244, 0.96) 0%, transparent 100%);
  bottom: 0;
  height: 48px;
  left: 0;
  pointer-events: none;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

export function HeroGlobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);
  const [isReady, setIsReady] = useState(false);

  const [dimensions, setDimensions] = useState({
    containerHeight: 405,
    canvasSize: 1800,
    topOffset: 162,
  });

  useEffect(() => {
    const updateDimensions = () => {
      const vw = typeof window !== 'undefined' ? window.innerWidth : 1440;
      // Globe sphere diameter spans the full width of the screen
      const globeDiameter = Math.max(Math.round(vw * 1.05), 1120);
      // In COBE, globe sphere diameter is 80% (0.8) of the canvas size
      const canvasSize = Math.round(globeDiameter / 0.8);

      // Target visible height
      const targetHeight = Math.min(Math.round(globeDiameter * 0.28), 415);

      // Top of sphere in canvas coordinates = canvasSize * 0.1
      const sphereTopInCanvas = Math.round(canvasSize * 0.1);
      // Apex positioned 16px below container top
      const topOffset = Math.max(sphereTopInCanvas - 16, 0);

      setDimensions({
        containerHeight: targetHeight,
        canvasSize,
        topOffset,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const theta = 0.22;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = phiRef.current;
    let width = dimensions.canvasSize;
    let height = dimensions.canvasSize;
    let globe: Globe | null = null;
    let animationFrameId: number;

    const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2);

    try {
      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: width * dpr,
        height: height * dpr,
        phi,
        theta,
        dark: 0,
        diffuse: 1.2,
        scale: 1,
        mapSamples: 22000,
        mapBrightness: 6,
        baseColor: [1, 1, 1],
        markerColor: [0.72, 0.05, 0.05],
        glowColor: [1, 1, 1],
        offset: [0, 0],
        markers: [],
        arcs: [],
        arcColor: [0.72, 0.05, 0.05],
      });

      setIsReady(true);
    } catch (e) {
      console.error('Failed to initialize COBE globe:', e);
      return;
    }

    const animate = () => {
      if (pointerInteracting.current === null) {
        phi += 0.003;
      } else {
        phi += pointerInteractionMovement.current;
        pointerInteractionMovement.current *= 0.88;
      }
      phiRef.current = phi;

      globe?.update({ phi });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      globe?.destroy();
    };
  }, [dimensions.canvasSize]);

  return (
    <GlobeContainer
      $heightPx={dimensions.containerHeight}
      $isReady={isReady}
      aria-hidden
      data-illustration="cobe-globe-red-dots"
    >
      {/* Precision table transfer: leaves the ocean (high luminance) 100% untouched and neutral, 
          and turns ONLY the dark land dots (low luminance) into RedView crimson red */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <defs>
          <filter id="cobeRedDotsOnly" colorInterpolationFilters="sRGB">
            <feComponentTransfer>
              <feFuncR
                type="table"
                tableValues="0.75 0.75 0.75 0.75 0.75 0.75 0.75 0.75 0.8 0.9 1.0"
              />
              <feFuncG
                type="table"
                tableValues="0.0 0.0 0.0 0.0 0.05 0.2 0.5 0.75 0.8 0.9 1.0"
              />
              <feFuncB
                type="table"
                tableValues="0.0 0.0 0.0 0.0 0.05 0.2 0.5 0.75 0.8 0.9 1.0"
              />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      <GlobeCanvasWrapper
        $canvasWidthPx={dimensions.canvasSize}
        $topOffsetPx={dimensions.topOffset}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
        }}
        onPointerMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = (e.clientX - pointerInteracting.current) * 0.005;
            pointerInteractionMovement.current = delta;
            pointerInteracting.current = e.clientX;
          }
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
        }}
        onPointerLeave={() => {
          pointerInteracting.current = null;
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            width: dimensions.canvasSize,
            height: dimensions.canvasSize,
          }}
        />
      </GlobeCanvasWrapper>

      <BottomFade />
    </GlobeContainer>
  );
}
