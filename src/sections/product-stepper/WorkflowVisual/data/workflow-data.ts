import { msg } from '@lingui/core/macro';

import { type WorkflowEdgeDefinition } from '../types/workflow-edge-definition';
import { type WorkflowNodeDefinition } from '../types/workflow-node-definition';

const TRUNK_X = 185;
const LEFT_X = 10;
const RIGHT_X = 360;

export const WORKFLOW_GRAPH: {
  animationSequence: string[];
  edges: WorkflowEdgeDefinition[];
  nodes: WorkflowNodeDefinition[];
  stepIntervalMs: number;
} = {
  nodes: [
    {
      id: 'trigger',
      type: msg`Déclencheur`,
      label: msg`GPX importé`,
      icon: 'playlistAdd',
      accent: 'blue',
      x: TRUNK_X,
      y: 16,
    },
    {
      id: 'filter',
      type: msg`Action`,
      label: msg`Résolution MNT 40 cm`,
      icon: 'filter',
      accent: 'green',
      x: TRUNK_X,
      y: 136,
    },
    {
      id: 'search',
      type: msg`Action`,
      label: msg`Corridor POI OSM`,
      icon: 'search',
      accent: 'gray',
      x: TRUNK_X,
      y: 256,
    },
    {
      id: 'ai',
      type: msg`Action`,
      label: msg`Moteur neige`,
      icon: 'brain',
      accent: 'pink',
      x: TRUNK_X,
      y: 376,
    },
    {
      id: 'update',
      type: msg`Action`,
      label: msg`Ensoleillement`,
      icon: 'reload',
      accent: 'gray',
      x: LEFT_X,
      y: 496,
    },
    {
      id: 'email',
      type: msg`Action`,
      label: msg`Estimation ETA`,
      icon: 'send',
      accent: 'red',
      x: TRUNK_X,
      y: 496,
    },
    {
      id: 'create',
      type: msg`Action`,
      label: msg`Export GPX`,
      icon: 'plus',
      accent: 'gray',
      x: RIGHT_X,
      y: 496,
    },
  ],
  edges: [
    { from: 'trigger', to: 'filter' },
    { from: 'filter', to: 'search' },
    { from: 'search', to: 'ai' },
    { from: 'ai', to: 'update' },
    { from: 'ai', to: 'email' },
    { from: 'ai', to: 'create' },
  ],
  animationSequence: [
    'trigger',
    'filter',
    'search',
    'ai',
    'update',
    'email',
    'create',
  ],
  stepIntervalMs: 800,
};
