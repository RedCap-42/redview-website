'use client';

import { type ReactNode } from 'react';

import { VisualMount } from '../engine/VisualMount';
import { type ImageSessionSettings } from '../halftone/create-image-session';
import { HalftoneImageScene } from '../halftone/HalftoneImageScene';

export type HalftoneImageBackdropProps = {
  imageUrl: string;
  settings: ImageSessionSettings;
  pointerRootSelector?: string;
  onFirstFrame?: () => void;
  poster?: ReactNode;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  detachFromLayout?: boolean;
  // Backdrops keep their artwork under reduced motion as a frozen frame.
  reducedMotionMode?: 'poster' | 'designed';
};

export function HalftoneImageBackdrop({
  imageUrl,
  settings,
  pointerRootSelector,
  onFirstFrame,
  poster = null,
  priority = false,
  loading = 'lazy',
  detachFromLayout = false,
  reducedMotionMode = 'designed',
}: HalftoneImageBackdropProps) {
  return (
    <VisualMount
      detachFromLayout={detachFromLayout}
      loading={loading}
      poster={poster}
      priority={priority}
      reducedMotion={reducedMotionMode}
    >
      <HalftoneImageScene
        imageUrl={imageUrl}
        onFirstFrame={onFirstFrame}
        pointerRootSelector={pointerRootSelector}
        settings={settings}
      />
    </VisualMount>
  );
}
