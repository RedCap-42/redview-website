import { type CSSProperties } from 'react';

export type TechIconProps = {
  sizePx?: number;
  className?: string;
  style?: CSSProperties;
};

// Mapbox Vector Mark (3D Polygonal Map Fold M)
export function MapboxIcon({ sizePx = 20 }: TechIconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height={sizePx}
      viewBox="0 0 24 24"
      width={sizePx}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.311L19.8 8.7 12 13 4.2 8.7 12 4.311zM3.8 10.389L11 14.35v7.261l-7.2-3.96V10.39zm9.2 11.222V14.35l7.2-3.96v7.261l-7.2 3.96z" />
    </svg>
  );
}

// WebGPU 3D Hardware Accelerated Compute Mark
export function WebGPUIcon({ sizePx = 20 }: TechIconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height={sizePx}
      viewBox="0 0 24 24"
      width={sizePx}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 1.5L2.5 7v10L12 22.5 21.5 17V7L12 1.5zm0 2.35l7.5 4.35v8.6L12 21.15 4.5 16.8V8.2L12 3.85zM7.5 9.2l4.5 2.6 4.5-2.6-4.5-2.6-4.5 2.6zm-1.5 2.4v4.8l4.5 2.6v-4.8l-4.5-2.6zm12 0l-4.5 2.6v4.8l4.5-2.6v-4.8z" />
    </svg>
  );
}

// WebAssembly & Rust High-Speed Engine Mark
export function WasmRustIcon({ sizePx = 20 }: TechIconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height={sizePx}
      viewBox="0 0 24 24"
      width={sizePx}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2a2 2 0 0 0-2 2v.26A8.006 8.006 0 0 0 6.26 6H6a2 2 0 1 0 0 4h.07A8.077 8.077 0 0 0 6 12c0 .69.07 1.36.2 2H6a2 2 0 1 0 0 4h.26A8.006 8.006 0 0 0 10 21.74V22a2 2 0 1 0 4 0v-.26A8.006 8.006 0 0 0 17.74 18H18a2 2 0 1 0 0-4h-.07c.05-.65.07-1.32.07-2 0-.69-.07-1.36-.2-2H18a2 2 0 1 0 0-4h-.26A8.006 8.006 0 0 0 14 2.26V2a2 2 0 0 0-2-2zm0 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm-3.5 3.5l1.5 5h1.2l1-3.2 1 3.2h1.2l1.5-5H17l-1 3.5-1-3.5h-1l-1 3.5-1-3.5H8.5z" />
    </svg>
  );
}

// LiDAR HD & COPC Point Cloud Mark
export function LidarCopcIcon({ sizePx = 20 }: TechIconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height={sizePx}
      viewBox="0 0 24 24"
      width={sizePx}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="4" r="1.5" />
      <circle cx="6" cy="8" r="1.5" />
      <circle cx="12" cy="8" r="2" />
      <circle cx="18" cy="8" r="1.5" />
      <circle cx="4" cy="13" r="1.2" />
      <circle cx="9" cy="13" r="1.8" />
      <circle cx="15" cy="13" r="1.8" />
      <circle cx="20" cy="13" r="1.2" />
      <circle cx="6" cy="18" r="1.5" />
      <circle cx="12" cy="18" r="2" />
      <circle cx="18" cy="18" r="1.5" />
      <circle cx="12" cy="22" r="1.2" />
      <path
        d="M12 4v4m-6 0l3 5m6-5l-3 5m-9 0l2 5m11-5l2 5m-8-5v5m0 0v4"
        fill="none"
        opacity="0.3"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

// IGN & SwissTopo Topographic / Elevation Contours Mark
export function TopoGeoIcon({ sizePx = 20 }: TechIconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={sizePx}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width={sizePx}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 20h18" />
      <path d="M4 16c2.5-2 5-1.5 7.5-3 2.5-1.5 5 0 8.5-2" />
      <path d="M6 12c2-3 4-4 6-4s4 2 6 5" />
      <path d="M9 7.5C10 6 11 5 12 5s2 1 3 2.5" />
      <circle cx="12" cy="5" fill="currentColor" r="1" />
    </svg>
  );
}

// Open-Meteo & GRIB2 High-Resolution Atmospheric Wind Stream Mark
export function WeatherGribIcon({ sizePx = 20 }: TechIconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={sizePx}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width={sizePx}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 8h11.5a3.5 3.5 0 1 0-3.5-3.5" />
      <path d="M2 13h15.5a2.5 2.5 0 1 1-2.5 2.5" />
      <path d="M6 18h7a2 2 0 1 0-2-2" />
    </svg>
  );
}

// Garmin FIT SDK Telemetry Mark
export function GarminFitIcon({ sizePx = 20 }: TechIconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height={sizePx}
      viewBox="0 0 24 24"
      width={sizePx}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L1 21h22L12 2zm0 4.5l7.5 13H4.5L12 6.5zm-1 5.5v4h2v-4h-2zm0 5v2h2v-2h-2z" />
    </svg>
  );
}

// GPU Chip / Hardware Speed Indicator Mark
export function GpuChipIcon({ sizePx = 15 }: TechIconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={sizePx}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width={sizePx}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect height="14" rx="2" width="14" x="5" y="5" />
      <path d="M9 9h6v6H9z" fill="currentColor" fillOpacity="0.2" />
      <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
    </svg>
  );
}
