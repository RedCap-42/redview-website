import { msg } from '@lingui/core/macro';

import { type EntityConnection } from '../types/entity-connection';
import { type EntityDefinition } from '../types/entity-definition';

// Illustrative object graph for the product mockup: how a trace resolves into
// segments, points of interest and computed analyses.
export const DATA_MODEL_GRAPH: {
  connections: EntityConnection[];
  entities: EntityDefinition[];
} = {
  entities: [
    {
      id: 'traces',
      label: msg`Traces`,
      meta: '840',
      isCustom: false,
      headerIcon: 'userSmall',
      tone: 'green',
      fields: [
        { id: 'segments', icon: 'building', label: msg`Segments` },
        { id: 'pois', icon: 'target', label: msg`Points d'intérêt` },
      ],
      expandCount: 22,
      x: 40,
      y: 40,
    },
    {
      id: 'segments',
      label: msg`Segments`,
      meta: '120',
      isCustom: false,
      headerIcon: 'buildingSmall',
      tone: 'indigo',
      fields: [
        { id: 'trace', icon: 'user', label: msg`Trace` },
        { id: 'analyses', icon: 'target', label: msg`Analyses` },
      ],
      expandCount: 39,
      x: 330,
      y: 20,
    },
    {
      id: 'snow-profiles',
      label: msg`Profils neige`,
      meta: '48',
      isCustom: true,
      headerIcon: 'briefcaseSmall',
      tone: 'purple',
      fields: [
        { id: 'segment', icon: 'building', label: msg`Segment` },
        { id: 'zone', icon: 'user', label: msg`Zone` },
      ],
      expandCount: 8,
      x: 40,
      y: 310,
    },
    {
      id: 'pois',
      label: msg`Points d'intérêt`,
      meta: '64',
      isCustom: false,
      headerIcon: 'targetSmall',
      tone: 'red',
      fields: [
        { id: 'segment', icon: 'building', label: msg`Segment` },
        { id: 'source', icon: 'user', label: msg`Source OSM` },
      ],
      expandCount: 11,
      x: 380,
      y: 190,
    },
    {
      id: 'exports',
      label: msg`Exports GPX`,
      meta: '45',
      isCustom: true,
      headerIcon: 'userScreenSmall',
      tone: 'indigo',
      fields: [
        { id: 'segment', icon: 'building', label: msg`Segment` },
        { id: 'poi', icon: 'target', label: msg`Point d'intérêt` },
      ],
      expandCount: 6,
      x: 280,
      y: 400,
    },
  ],
  connections: [
    { from: 'traces', to: 'segments' },
    { from: 'segments', to: 'pois' },
    { from: 'pois', to: 'exports' },
    { from: 'traces', to: 'snow-profiles' },
  ],
};
