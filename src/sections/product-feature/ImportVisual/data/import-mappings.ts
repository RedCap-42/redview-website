import { msg } from '@lingui/core/macro';
import {
  IconCalendarStats,
  IconMountain,
  IconRoute,
  IconUser,
} from '@tabler/icons-react';

import { type ColumnMapping } from '../types/column-mapping';

export const MAPPINGS: ColumnMapping[] = [
  { Icon: IconUser, example: 'Col du Galibier', field: msg`Trace`, header: 'Trace' },
  {
    Icon: IconRoute,
    example: '6.4078, 45.0640',
    field: msg`Départ`,
    header: 'Départ',
  },
  {
    Icon: IconMountain,
    example: '2 642 m',
    field: msg`Sommet`,
    header: 'Sommet',
  },
  {
    Icon: IconCalendarStats,
    example: '42,1 km',
    field: msg`Distance`,
    header: 'Distance',
  },
];
