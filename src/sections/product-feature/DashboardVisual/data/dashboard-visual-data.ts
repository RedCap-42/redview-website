import { msg } from '@lingui/core/macro';

import { type DashboardKpi } from '../types/dashboard-kpi';
import { type DashboardMonth } from '../types/dashboard-month';
import { type DashboardStage } from '../types/dashboard-stage';

// Illustrative trace-analysis mockup: elevation bands instead of a sales
// pipeline, and terrain metrics instead of revenue KPIs.
export const DASHBOARD_VISUAL_DATA: {
  byMonth: DashboardMonth[];
  kpis: DashboardKpi[];
  stages: DashboardStage[];
} = {
  stages: [
    { id: 'valley', label: msg`Vallée`, tone: 'red', value: 47 },
    { id: 'forest', label: msg`Forêt`, tone: 'purple', value: 34 },
    { id: 'alpine', label: msg`Alpin`, tone: 'sky', value: 27 },
    { id: 'glacier', label: msg`Glacier`, tone: 'turquoise', value: 20 },
    { id: 'summit', label: msg`Sommet`, tone: 'yellow', value: 12 },
  ],
  byMonth: [
    { id: 'jan', label: msg`Jan`, value: 12 },
    { id: 'feb', label: msg`Fév`, value: 16 },
    { id: 'mar', label: msg`Mar`, value: 14 },
    { id: 'apr', label: msg`Avr`, value: 22 },
    { id: 'may', label: msg`Mai`, value: 27 },
    { id: 'jun', label: msg`Juin`, value: 24 },
    { id: 'jul', label: msg`Juil`, value: 31 },
  ],
  kpis: [
    {
      id: 'distance',
      label: msg`Distance totale`,
      trendDirection: 'up',
      trendPercent: 12,
      value: '312 km',
    },
    {
      id: 'ascent',
      label: msg`Dénivelé cumulé`,
      trendDirection: 'up',
      trendPercent: 5,
      value: '18 400 m',
    },
    {
      id: 'snow-cover',
      label: msg`Couverture neigeuse`,
      trendDirection: 'down',
      trendPercent: 3,
      value: '64 %',
    },
  ],
};
