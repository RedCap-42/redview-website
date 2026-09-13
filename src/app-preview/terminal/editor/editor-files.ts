import { type EditorFile } from './editor-types';

// The mock repository the editor browses: an authored RedView SDK sample that
// shows how a trace object, its terrain fields, and their views are declared.

const schemaIdentifiersSource = `export const SCHEMA_IDS = {
  trace: {
    object: '733956fd-c19c-4a13-a6c2-e92d6e28bcb9',
    fields: {
      name: '0c69e10f-77c5-4e47-ad62-53445ff3bf9c',
      discipline: '1f381732-1c7b-4939-a54d-b6a4ff7366d2',
      distanceKm: 'fdbfddab-6424-4726-8eaa-5f853c401939',
      ascentM: 'f333e670-fbde-494d-a46b-a37bff24b37d',
      maxSlope: 'aed92b19-1f0c-4812-8d40-e18e2866b719',
      snowCover: 'fcc6d872-82ca-4d99-bd1d-659d1b3ad46c',
      sunExposure: '24670e09-3e4d-4b38-bbfa-4a4316f4ecfe',
      segments: 'b6a019de-df55-4210-9445-d83df1f70f86',
      pois: 'dcd879a5-bc60-4225-85e1-0085ccab1b0d',
      exportFormat: '5b877c2a-d10b-49e8-9c30-b9202401ec35',
    },
    views: {
      index: '4587a1a3-0c5f-4f60-9996-d77a7233ce26',
    },
    commandMenuItems: {
      recomputeTerrain: '2a3c2b88-20ad-4ff6-9c4f-52f2e2f1d801',
      analyseSnow: 'cfcb4a13-9a9c-4b20-9c58-1a87e7a63c62',
      exportGpx: '36c54890-6a9d-4c79-95c1-3b9b3d33ea33',
    },
  },
  segment: {
    object: 'e7f1e750-5883-4e71-8b22-1c5258d8faa7',
    fields: {
      name: '92bc09d1-5712-4877-aa6d-7b5900267935',
      bearing: 'cc2e7d7a-93e5-4369-9682-7bf8134a01e9',
      grade: '68af6212-15fe-427d-bfa3-19a4a7ab48c2',
      surface: 'd5f816a5-456e-41c3-b7b3-f3259703146b',
      windAt: '382820f2-8f47-4b3b-a34a-83d1d707a350',
      snowDepthAt: '2a255cee-419b-4151-b8bd-3e11a2c6c2b2',
      sunAt: '22175eb0-44b0-493b-ad1e-f2c545e60c3d',
      trace: '42c9106f-41e1-467a-bb00-c4442f4541f8',
      pois: '92221a22-9356-485d-ace0-f682f38ae6fe',
    },
    views: {
      index: '92f768d9-e6c1-4070-b0c8-799204872a00',
      exposed: 'd62590d5-aa52-4d77-bca7-225453ed659f',
      sheltered: 'f3ede3df-04eb-45a8-991e-a8b324bbbb16',
    },
    commandMenuItems: {
      recomputeWind: '16a67c2f-0ed1-4d4b-b40e-0c5d0c0d40a1',
      addPoi: 'cb0f2af2-5c9d-4f9b-8a12-3cafecdde7a1',
      exposedSegments: 'c4c3a0dd-2d7c-4fc6-a2f7-eb6a89fc8d01',
    },
  },
  poi: {
    object: '16ffcc45-b097-4031-a768-ec62a23dd8d3',
    fields: {
      name: '5018c89c-80e1-452b-9e0f-0eda5351c972',
      poiType: '0ee139c4-b701-49f8-9f58-5e79fc1a08bd',
      status: '2ea1b614-9aa3-41ce-b253-97919f9544ee',
      elevationM: 'd2a52145-f3d1-4657-9734-b96e965408a3',
      trace: 'd84468aa-5b75-4ae4-836e-7fff0ce58c91',
      segment: 'eb65b7f1-0780-4a9b-9fcc-528675ef0967',
    },
    commandMenuItems: {
      pinPoi: '01c44f8c-15db-40e7-8b57-7d7d0f9f2fa0',
      setPoiStatus: '8f7cd03b-3fd6-4c65-b0c4-2ec0a4a42a5e',
    },
  },
  terrainZone: {
    commandMenuItems: {
      setZoneStatus: '2a4fa56d-5d8a-4e55-8c1e-27e8fc6f1d63',
    },
  },
  route: {
    object: '2f18d525-0068-4d13-a26d-96eb31ed7646',
    fields: {
      name: 'ad99750c-c083-4cb6-8985-0b0e768dcced',
      routeCode: '97bebd5b-2bd2-4ff3-a7df-c753f68db1aa',
      routeStatus: '1031ca3c-c12a-463c-b522-4547d06c0cc0',
      segments: 'b94b7f00-a5ef-4179-982b-1ea68f94ecff',
    },
    commandMenuItems: {
      setRouteStatus: '77e56e08-fb0a-4d4a-b9b2-9a3e5b8af1b6',
      addSegment: 'b11a9c20-0bcb-4f73-9ef9-6e80d39b8c7e',
      segmentsOfRoute: 'a5ce6cd9-1a45-4a7f-9a61-0a0a6ef1cf4a',
    },
  },
} as const;
`;

const traceObjectSource = `import { defineObject, FieldType, RelationType } from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

enum Discipline {
  Trail = 'TRAIL',
  SkiTouring = 'SKI_TOURING',
  Paragliding = 'PARAGLIDING',
  Skyrunning = 'SKYRUNNING',
}

export default defineObject({
  universalIdentifier: SCHEMA_IDS.trace.object,
  nameSingular: 'trace',
  namePlural: 'traces',
  labelSingular: 'Trace',
  labelPlural: 'Traces',
  description: 'A GPS trace with its terrain, snow and sun analysis.',
  icon: 'IconRoute',
  isSearchable: true,
  labelIdentifierFieldMetadataUniversalIdentifier:
    SCHEMA_IDS.trace.fields.name,
  fields: [
    {
      universalIdentifier: SCHEMA_IDS.trace.fields.name,
      type: FieldType.TEXT,
      name: 'name',
      label: 'Name',
      icon: 'IconRoute',
      isNullable: false,
    },
    {
      universalIdentifier: SCHEMA_IDS.trace.fields.discipline,
      type: FieldType.SELECT,
      name: 'discipline',
      label: 'Discipline',
      icon: 'IconFlag',
      isNullable: false,
      options: [
        { label: 'Trail', value: Discipline.Trail, color: 'sky' },
        { label: 'Ski touring', value: Discipline.SkiTouring, color: 'blue' },
        { label: 'Paragliding', value: Discipline.Paragliding, color: 'turquoise' },
        { label: 'Skyrunning', value: Discipline.Skyrunning, color: 'orange' },
      ],
    },
    {
      universalIdentifier: SCHEMA_IDS.trace.fields.distanceKm,
      type: FieldType.NUMBER,
      name: 'distanceKm',
      label: 'Distance (km)',
      icon: 'IconRuler',
    },
    {
      universalIdentifier: SCHEMA_IDS.trace.fields.ascentM,
      type: FieldType.NUMBER,
      name: 'ascentM',
      label: 'Ascent (m)',
      icon: 'IconArrowUp',
    },
    {
      universalIdentifier: SCHEMA_IDS.trace.fields.maxSlope,
      type: FieldType.NUMBER,
      name: 'maxSlopePercent',
      label: 'Max slope (%)',
      icon: 'IconTriangle',
    },
    {
      universalIdentifier: SCHEMA_IDS.trace.fields.segments,
      type: FieldType.RELATION,
      name: 'segments',
      label: 'Segments',
      icon: 'IconRoute',
      isNullable: true,
      relationTargetFieldMetadataUniversalIdentifier:
        SCHEMA_IDS.segment.fields.trace,
      relationTargetObjectMetadataUniversalIdentifier:
        SCHEMA_IDS.segment.object,
      universalSettings: {
        relationType: RelationType.ONE_TO_MANY,
      },
    },
  ],
});
`;

const segmentObjectSource = `import {
  defineObject,
  FieldType,
  OnDeleteAction,
  RelationType,
} from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

enum Surface {
  Meadow = 'MEADOW',
  Scree = 'SCREE',
  Rock = 'ROCK',
  Snow = 'SNOW',
  Glacier = 'GLACIER',
}

export default defineObject({
  universalIdentifier: SCHEMA_IDS.segment.object,
  nameSingular: 'segment',
  namePlural: 'segments',
  labelSingular: 'Segment',
  labelPlural: 'Segments',
  description: 'A resolved slice of a trace with its wind, snow and sun.',
  icon: 'IconRoute',
  fields: [
    {
      universalIdentifier: SCHEMA_IDS.segment.fields.name,
      type: FieldType.TEXT,
      name: 'name',
      label: 'Segment',
      isUnique: true,
    },
    {
      universalIdentifier: SCHEMA_IDS.segment.fields.bearing,
      type: FieldType.NUMBER,
      name: 'bearingDeg',
      label: 'Bearing (°)',
    },
    {
      universalIdentifier: SCHEMA_IDS.segment.fields.grade,
      type: FieldType.NUMBER,
      name: 'gradePercent',
      label: 'Grade (%)',
    },
    {
      universalIdentifier: SCHEMA_IDS.segment.fields.surface,
      type: FieldType.SELECT,
      name: 'surface',
      label: 'Surface',
      options: [
        { label: 'Meadow', value: Surface.Meadow, color: 'green' },
        { label: 'Scree', value: Surface.Scree, color: 'gray' },
        { label: 'Rock', value: Surface.Rock, color: 'orange' },
        { label: 'Snow', value: Surface.Snow, color: 'sky' },
        { label: 'Glacier', value: Surface.Glacier, color: 'blue' },
      ],
    },
    {
      universalIdentifier: SCHEMA_IDS.segment.fields.windAt,
      type: FieldType.DATE_TIME,
      name: 'windAt',
      label: 'Wind at',
    },
    {
      universalIdentifier: SCHEMA_IDS.segment.fields.trace,
      type: FieldType.RELATION,
      name: 'trace',
      label: 'Trace',
      relationTargetFieldMetadataUniversalIdentifier:
        SCHEMA_IDS.trace.fields.segments,
      relationTargetObjectMetadataUniversalIdentifier: SCHEMA_IDS.trace.object,
      universalSettings: {
        relationType: RelationType.MANY_TO_ONE,
        onDelete: OnDeleteAction.SET_NULL,
        joinColumnName: 'traceId',
      },
    },
    {
      universalIdentifier: SCHEMA_IDS.segment.fields.pois,
      type: FieldType.RELATION,
      name: 'pois',
      label: 'Points of interest',
      relationTargetObjectMetadataUniversalIdentifier: SCHEMA_IDS.poi.object,
      universalSettings: {
        relationType: RelationType.ONE_TO_MANY,
      },
    },
  ],
});
`;

const poiObjectSource = `import {
  defineObject,
  FieldType,
  OnDeleteAction,
  RelationType,
  STANDARD_OBJECT,
} from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

enum PoiType {
  Water = 'WATER',
  Shelter = 'SHELTER',
  Pass = 'PASS',
  Takeoff = 'TAKEOFF',
  Landing = 'LANDING',
}

enum PoiStatus {
  Open = 'OPEN',
  Seasonal = 'SEASONAL',
  Closed = 'CLOSED',
}

export default defineObject({
  universalIdentifier: SCHEMA_IDS.poi.object,
  nameSingular: 'poi',
  namePlural: 'pois',
  labelSingular: 'Point of interest',
  labelPlural: 'Points of interest',
  description: 'Water, shelter, passes, takeoffs and landings along a trace.',
  icon: 'IconMapPin',
  fields: [
    {
      universalIdentifier: SCHEMA_IDS.poi.fields.poiType,
      type: FieldType.SELECT,
      name: 'poiType',
      label: 'Type',
      options: [
        { label: 'Water', value: PoiType.Water, color: 'blue' },
        { label: 'Shelter', value: PoiType.Shelter, color: 'purple' },
        { label: 'Pass', value: PoiType.Pass, color: 'orange' },
        { label: 'Takeoff', value: PoiType.Takeoff, color: 'turquoise' },
        { label: 'Landing', value: PoiType.Landing, color: 'green' },
      ],
    },
    {
      universalIdentifier: SCHEMA_IDS.poi.fields.status,
      type: FieldType.SELECT,
      name: 'status',
      label: 'Status',
      options: [
        { label: 'Open', value: PoiStatus.Open, color: 'green' },
        { label: 'Seasonal', value: PoiStatus.Seasonal, color: 'sky' },
        { label: 'Closed', value: PoiStatus.Closed, color: 'red' },
      ],
    },
    {
      universalIdentifier: SCHEMA_IDS.poi.fields.elevationM,
      type: FieldType.NUMBER,
      name: 'elevationM',
      label: 'Elevation (m)',
    },
    {
      universalIdentifier: SCHEMA_IDS.poi.fields.segment,
      type: FieldType.RELATION,
      name: 'segment',
      label: 'Segment',
      relationTargetObjectMetadataUniversalIdentifier: SCHEMA_IDS.segment.object,
      universalSettings: {
        relationType: RelationType.MANY_TO_ONE,
        onDelete: OnDeleteAction.SET_NULL,
        joinColumnName: 'segmentId',
      },
    },
  ],
});
`;

const routeObjectSource = `import { defineObject, FieldType, RelationType } from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

enum RouteStatus {
  Planned = 'PLANNED',
  Reconciled = 'RECONCILED',
  Shared = 'SHARED',
  Archived = 'ARCHIVED',
}

export default defineObject({
  universalIdentifier: SCHEMA_IDS.route.object,
  nameSingular: 'route',
  namePlural: 'routes',
  labelSingular: 'Route',
  labelPlural: 'Routes',
  description: 'A generated route profile and its status.',
  icon: 'IconMapPin',
  fields: [
    {
      universalIdentifier: SCHEMA_IDS.route.fields.routeCode,
      type: FieldType.TEXT,
      name: 'routeCode',
      label: 'Route code',
      isUnique: true,
    },
    {
      universalIdentifier: SCHEMA_IDS.route.fields.routeStatus,
      type: FieldType.SELECT,
      name: 'routeStatus',
      label: 'Status',
      options: [
        { label: 'Planned', value: RouteStatus.Planned, color: 'green' },
        { label: 'Reconciled', value: RouteStatus.Reconciled, color: 'sky' },
        { label: 'Shared', value: RouteStatus.Shared, color: 'purple' },
        { label: 'Archived', value: RouteStatus.Archived, color: 'gray' },
      ],
    },
    {
      universalIdentifier: SCHEMA_IDS.route.fields.segments,
      type: FieldType.RELATION,
      name: 'segments',
      label: 'Segments',
      relationTargetObjectMetadataUniversalIdentifier: SCHEMA_IDS.segment.object,
      universalSettings: {
        relationType: RelationType.ONE_TO_MANY,
      },
    },
  ],
});
`;

const tracesViewSource = `import { defineView, ViewKey } from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

export default defineView({
  universalIdentifier: SCHEMA_IDS.trace.views.index,
  name: 'Traces',
  objectUniversalIdentifier: SCHEMA_IDS.trace.object,
  icon: 'IconRoute',
  key: ViewKey.INDEX,
  position: 0,
  fields: [
    {
      fieldMetadataUniversalIdentifier: SCHEMA_IDS.trace.fields.name,
      position: 0,
      isVisible: true,
      size: 220,
    },
    {
      fieldMetadataUniversalIdentifier: SCHEMA_IDS.trace.fields.discipline,
      position: 1,
      isVisible: true,
      size: 150,
    },
    {
      fieldMetadataUniversalIdentifier: SCHEMA_IDS.trace.fields.distanceKm,
      position: 2,
      isVisible: true,
      size: 140,
    },
    {
      fieldMetadataUniversalIdentifier: SCHEMA_IDS.trace.fields.ascentM,
      position: 3,
      isVisible: true,
      size: 180,
    },
  ],
});
`;

const exposedSegmentsViewSource = `import {
  defineView,
  ViewFilterOperand,
  ViewType,
} from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

export default defineView({
  universalIdentifier: SCHEMA_IDS.segment.views.exposed,
  name: 'Exposed segments',
  objectUniversalIdentifier: SCHEMA_IDS.segment.object,
  icon: 'IconWind',
  type: ViewType.TABLE,
  position: 1,
  filters: [
    {
      fieldMetadataUniversalIdentifier: SCHEMA_IDS.segment.fields.windAt,
      operand: ViewFilterOperand.IS_IN_FUTURE,
      value: {},
    },
  ],
});
`;

const tracesNavItemSource = `import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: SCHEMA_IDS.trace.navigationMenuItems.index,
  name: 'Traces',
  icon: 'IconRoute',
  color: 'orange',
  position: 10,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: SCHEMA_IDS.trace.views.index,
});
`;

const exposedSegmentsNavItemSource = `import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: SCHEMA_IDS.segment.navigationMenuItems.exposed,
  name: 'Exposed segments',
  icon: 'IconWind',
  color: 'sky',
  position: 11,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: SCHEMA_IDS.segment.views.exposed,
});
`;

const shelteredSegmentsNavItemSource = `import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: SCHEMA_IDS.segment.navigationMenuItems.sheltered,
  name: 'Sheltered segments',
  icon: 'IconHistory',
  color: 'gray',
  position: 12,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: SCHEMA_IDS.segment.views.sheltered,
});
`;

const tracesFromRouteNavItemSource = `import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: SCHEMA_IDS.route.navigationMenuItems.index,
  name: 'Routes',
  icon: 'IconRoute',
  color: 'orange',
  position: 0,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: SCHEMA_IDS.route.views.index,
});
`;

const poisNavItemSource = `import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: SCHEMA_IDS.poi.navigationMenuItems.index,
  name: 'Points of interest',
  icon: 'IconMapPin',
  color: 'purple',
  position: 20,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: SCHEMA_IDS.poi.views.index,
});
`;

const terrainZonesNavItemSource = `import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

export default defineNavigationMenuItem({
  universalIdentifier: SCHEMA_IDS.terrainZone.navigationMenuItems.index,
  name: 'Terrain zones',
  icon: 'IconMapPin',
  color: 'red',
  position: 40,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: SCHEMA_IDS.terrainZone.views.index,
});
`;

const routesViewSource = `import { defineView, ViewKey } from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

export default defineView({
  universalIdentifier: SCHEMA_IDS.route.views.index,
  name: 'All routes',
  objectUniversalIdentifier: SCHEMA_IDS.route.object,
  icon: 'IconRoute',
  key: ViewKey.INDEX,
  position: 0,
  fields: [
    {
      fieldMetadataUniversalIdentifier: SCHEMA_IDS.route.fields.routeCode,
      position: 0,
      isVisible: true,
      size: 220,
    },
    {
      fieldMetadataUniversalIdentifier: SCHEMA_IDS.route.fields.routeStatus,
      position: 1,
      isVisible: true,
      size: 160,
    },
  ],
});
`;

const poisViewSource = `import { defineView, ViewKey } from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

export default defineView({
  universalIdentifier: SCHEMA_IDS.poi.views.index,
  name: 'Points of interest',
  objectUniversalIdentifier: SCHEMA_IDS.poi.object,
  icon: 'IconMapPin',
  key: ViewKey.INDEX,
  position: 0,
  fields: [
    {
      fieldMetadataUniversalIdentifier: SCHEMA_IDS.poi.fields.name,
      position: 0,
      isVisible: true,
      size: 220,
    },
    {
      fieldMetadataUniversalIdentifier: SCHEMA_IDS.poi.fields.poiType,
      position: 1,
      isVisible: true,
      size: 170,
    },
    {
      fieldMetadataUniversalIdentifier: SCHEMA_IDS.poi.fields.status,
      position: 2,
      isVisible: true,
      size: 140,
    },
    {
      fieldMetadataUniversalIdentifier: SCHEMA_IDS.poi.fields.segment,
      position: 3,
      isVisible: true,
      size: 180,
    },
  ],
});
`;

const terrainZonesViewSource = `import { defineView, ViewKey } from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

export default defineView({
  universalIdentifier: SCHEMA_IDS.terrainZone.views.index,
  name: 'Terrain zones',
  objectUniversalIdentifier: SCHEMA_IDS.terrainZone.object,
  icon: 'IconMapPin',
  key: ViewKey.INDEX,
  position: 0,
  fields: [
    {
      fieldMetadataUniversalIdentifier: SCHEMA_IDS.terrainZone.fields.name,
      position: 0,
      isVisible: true,
      size: 220,
    },
    {
      fieldMetadataUniversalIdentifier: SCHEMA_IDS.terrainZone.fields.zoneCode,
      position: 1,
      isVisible: true,
      size: 140,
    },
    {
      fieldMetadataUniversalIdentifier: SCHEMA_IDS.terrainZone.fields.zoneStatus,
      position: 2,
      isVisible: true,
      size: 150,
    },
  ],
});
`;

const shelteredSegmentsViewSource = `import {
  defineView,
  ViewFilterOperand,
  ViewType,
} from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

export default defineView({
  universalIdentifier: SCHEMA_IDS.segment.views.sheltered,
  name: 'Sheltered segments',
  objectUniversalIdentifier: SCHEMA_IDS.segment.object,
  icon: 'IconHistory',
  type: ViewType.TABLE,
  position: 2,
  filters: [
    {
      fieldMetadataUniversalIdentifier: SCHEMA_IDS.segment.fields.windAt,
      operand: ViewFilterOperand.IS_IN_PAST,
      value: {},
    },
  ],
});
`;

const recomputeTerrainCommandMenuItemSource = `import {
  CommandMenuItemAvailabilityType,
  CommandMenuItemActionType,
  defineCommandMenuItem,
} from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

export default defineCommandMenuItem({
  universalIdentifier: SCHEMA_IDS.trace.commandMenuItems.recomputeTerrain,
  label: 'Recompute terrain',
  icon: 'IconRepeat',
  isPinned: true,
  position: 0,
  availabilityType: CommandMenuItemAvailabilityType.RECORD_SELECTION,
  objectMetadataUniversalIdentifier: SCHEMA_IDS.trace.object,
  action: {
    // Re-resolve a trace against the 40 cm DEM: create a fresh segment set
    // pre-linked to this trace so the analyst only edits the new slices.
    type: CommandMenuItemActionType.CREATE_RELATED_RECORD,
    relationFieldMetadataUniversalIdentifier:
      SCHEMA_IDS.trace.fields.segments,
    targetObjectMetadataUniversalIdentifier: SCHEMA_IDS.segment.object,
  },
});
`;

const analyseSnowFromTraceCommandMenuItemSource = `import {
  CommandMenuItemAvailabilityType,
  CommandMenuItemActionType,
  defineCommandMenuItem,
} from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

export default defineCommandMenuItem({
  universalIdentifier: SCHEMA_IDS.trace.commandMenuItems.analyseSnow,
  label: 'Analyse snow',
  icon: 'IconCalendarPlus',
  isPinned: true,
  position: 1,
  availabilityType: CommandMenuItemAvailabilityType.RECORD_SELECTION,
  objectMetadataUniversalIdentifier: SCHEMA_IDS.trace.object,
  action: {
    type: CommandMenuItemActionType.CREATE_RELATED_RECORD,
    relationFieldMetadataUniversalIdentifier:
      SCHEMA_IDS.trace.fields.segments,
    targetObjectMetadataUniversalIdentifier: SCHEMA_IDS.segment.object,
  },
});
`;

const exportGpxCommandMenuItemSource = `import {
  CommandMenuItemAvailabilityType,
  CommandMenuItemActionType,
  defineCommandMenuItem,
} from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

export default defineCommandMenuItem({
  universalIdentifier: SCHEMA_IDS.trace.commandMenuItems.exportGpx,
  label: 'Export',
  icon: 'IconPlayerPause',
  isPinned: true,
  position: 2,
  availabilityType: CommandMenuItemAvailabilityType.RECORD_SELECTION,
  objectMetadataUniversalIdentifier: SCHEMA_IDS.trace.object,
  action: {
    // One-click format flip to GPX — no picker needed.
    type: CommandMenuItemActionType.SET_FIELD_VALUE,
    fieldMetadataUniversalIdentifier: SCHEMA_IDS.trace.fields.exportFormat,
    value: 'GPX',
  },
});
`;

const recomputeWindCommandMenuItemSource = `import {
  CommandMenuItemAvailabilityType,
  CommandMenuItemActionType,
  defineCommandMenuItem,
} from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

export default defineCommandMenuItem({
  universalIdentifier: SCHEMA_IDS.segment.commandMenuItems.recomputeWind,
  label: 'Recompute wind',
  icon: 'IconCalendarClock',
  isPinned: true,
  position: 1,
  availabilityType: CommandMenuItemAvailabilityType.RECORD_SELECTION,
  objectMetadataUniversalIdentifier: SCHEMA_IDS.segment.object,
  action: {
    type: CommandMenuItemActionType.EDIT_FIELD,
    fieldMetadataUniversalIdentifier: SCHEMA_IDS.segment.fields.windAt,
  },
});
`;

const addPoiCommandMenuItemSource = `import {
  CommandMenuItemAvailabilityType,
  CommandMenuItemActionType,
  defineCommandMenuItem,
} from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

export default defineCommandMenuItem({
  universalIdentifier: SCHEMA_IDS.segment.commandMenuItems.addPoi,
  label: 'Add point of interest',
  icon: 'IconMapPin',
  isPinned: true,
  position: 1,
  availabilityType: CommandMenuItemAvailabilityType.RECORD_SELECTION,
  objectMetadataUniversalIdentifier: SCHEMA_IDS.segment.object,
  action: {
    type: CommandMenuItemActionType.CREATE_RELATED_RECORD,
    relationFieldMetadataUniversalIdentifier: SCHEMA_IDS.segment.fields.pois,
    targetObjectMetadataUniversalIdentifier: SCHEMA_IDS.poi.object,
  },
});
`;

const exposedSegmentsCommandMenuItemSource = `import {
  CommandMenuItemAvailabilityType,
  CommandMenuItemActionType,
  defineCommandMenuItem,
} from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

export default defineCommandMenuItem({
  universalIdentifier: SCHEMA_IDS.segment.commandMenuItems.exposedSegments,
  label: 'Exposed',
  icon: 'IconWind',
  isPinned: true,
  position: 2,
  availabilityType: CommandMenuItemAvailabilityType.GLOBAL_OBJECT_CONTEXT,
  objectMetadataUniversalIdentifier: SCHEMA_IDS.segment.object,
  action: {
    type: CommandMenuItemActionType.NAVIGATE_TO_VIEW,
    viewUniversalIdentifier: SCHEMA_IDS.segment.views.exposed,
  },
});
`;

const pinPoiCommandMenuItemSource = `import {
  CommandMenuItemAvailabilityType,
  CommandMenuItemActionType,
  defineCommandMenuItem,
  STANDARD_OBJECT,
} from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

export default defineCommandMenuItem({
  universalIdentifier: SCHEMA_IDS.poi.commandMenuItems.pinPoi,
  label: 'Pin point of interest',
  icon: 'IconCalendarPlus',
  isPinned: true,
  position: 0,
  availabilityType: CommandMenuItemAvailabilityType.GLOBAL_OBJECT_CONTEXT,
  objectMetadataUniversalIdentifier: SCHEMA_IDS.poi.object,
  action: {
    // Pin a point of interest on a trace: create a POI pre-linked to a
    // Company so a guide can capture a waypoint in one step.
    type: CommandMenuItemActionType.CREATE_RELATED_RECORD,
    relationFieldMetadataUniversalIdentifier: SCHEMA_IDS.poi.fields.trace,
    targetObjectMetadataUniversalIdentifier:
      STANDARD_OBJECT.company.universalIdentifier,
  },
});
`;

const setPoiStatusCommandMenuItemSource = `import {
  CommandMenuItemAvailabilityType,
  CommandMenuItemActionType,
  defineCommandMenuItem,
} from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

export default defineCommandMenuItem({
  universalIdentifier: SCHEMA_IDS.poi.commandMenuItems.setPoiStatus,
  label: 'Set status',
  icon: 'IconFlag',
  isPinned: true,
  position: 1,
  availabilityType: CommandMenuItemAvailabilityType.RECORD_SELECTION,
  objectMetadataUniversalIdentifier: SCHEMA_IDS.poi.object,
  action: {
    type: CommandMenuItemActionType.EDIT_FIELD,
    fieldMetadataUniversalIdentifier: SCHEMA_IDS.poi.fields.status,
  },
});
`;

const setZoneStatusCommandMenuItemSource = `import {
  CommandMenuItemAvailabilityType,
  CommandMenuItemActionType,
  defineCommandMenuItem,
  STANDARD_OBJECT,
} from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

export default defineCommandMenuItem({
  universalIdentifier: SCHEMA_IDS.terrainZone.commandMenuItems.setZoneStatus,
  label: 'Set status',
  icon: 'IconFlag',
  isPinned: true,
  position: 0,
  availabilityType: CommandMenuItemAvailabilityType.RECORD_SELECTION,
  objectMetadataUniversalIdentifier:
    STANDARD_OBJECT.company.universalIdentifier,
  action: {
    type: CommandMenuItemActionType.EDIT_FIELD,
    fieldMetadataUniversalIdentifier:
      STANDARD_OBJECT.company.fields.accountStatus,
  },
});
`;

const setRouteStatusCommandMenuItemSource = `import {
  CommandMenuItemAvailabilityType,
  CommandMenuItemActionType,
  defineCommandMenuItem,
} from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

export default defineCommandMenuItem({
  universalIdentifier: SCHEMA_IDS.route.commandMenuItems.setRouteStatus,
  label: 'Set status',
  icon: 'IconFlag',
  isPinned: true,
  position: 0,
  availabilityType: CommandMenuItemAvailabilityType.RECORD_SELECTION,
  objectMetadataUniversalIdentifier: SCHEMA_IDS.route.object,
  action: {
    type: CommandMenuItemActionType.EDIT_FIELD,
    fieldMetadataUniversalIdentifier:
      SCHEMA_IDS.route.fields.routeStatus,
  },
});
`;

const addSegmentCommandMenuItemSource = `import {
  CommandMenuItemAvailabilityType,
  CommandMenuItemActionType,
  defineCommandMenuItem,
} from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

export default defineCommandMenuItem({
  universalIdentifier: SCHEMA_IDS.route.commandMenuItems.addSegment,
  label: 'Add segment',
  icon: 'IconCalendarPlus',
  isPinned: true,
  position: 1,
  availabilityType: CommandMenuItemAvailabilityType.RECORD_SELECTION,
  objectMetadataUniversalIdentifier: SCHEMA_IDS.route.object,
  action: {
    // Reserve a slice on this route: creates a linked Segment with only the
    // windAt to fill in.
    type: CommandMenuItemActionType.CREATE_RELATED_RECORD,
    relationFieldMetadataUniversalIdentifier:
      SCHEMA_IDS.route.fields.segments,
    targetObjectMetadataUniversalIdentifier: SCHEMA_IDS.segment.object,
  },
});
`;

const segmentsOfRouteCommandMenuItemSource = `import {
  CommandMenuItemAvailabilityType,
  CommandMenuItemActionType,
  defineCommandMenuItem,
} from 'redview-sdk/define';

import { SCHEMA_IDS } from 'src/constants/schema-identifiers';

export default defineCommandMenuItem({
  universalIdentifier: SCHEMA_IDS.route.commandMenuItems.segmentsOfRoute,
  label: 'Segments',
  icon: 'IconRoute',
  isPinned: true,
  position: 2,
  availabilityType: CommandMenuItemAvailabilityType.RECORD_SELECTION,
  objectMetadataUniversalIdentifier: SCHEMA_IDS.route.object,
  action: {
    type: CommandMenuItemActionType.NAVIGATE_TO_RELATED_VIEW,
    relationFieldMetadataUniversalIdentifier:
      SCHEMA_IDS.route.fields.segments,
  },
});
`;

const applicationConfigSource = `import { defineApplication } from 'redview-sdk/define';

import {
  APP_DESCRIPTION,
  APP_DISPLAY_NAME,
  APPLICATION_UNIVERSAL_IDENTIFIER,
  DEFAULT_ROLE_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

export default defineApplication({
  universalIdentifier: APPLICATION_UNIVERSAL_IDENTIFIER,
  displayName: APP_DISPLAY_NAME,
  description: APP_DESCRIPTION,
  defaultRoleUniversalIdentifier: DEFAULT_ROLE_UNIVERSAL_IDENTIFIER,
});
`;

export const EDITOR_FILES: ReadonlyArray<EditorFile> = [
  {
    id: 'schema-identifiers',
    name: 'schema-identifiers.ts',
    path: 'src/constants/schema-identifiers.ts',
    source: schemaIdentifiersSource,
  },
  {
    id: 'trace-object',
    name: 'trace.object.ts',
    path: 'src/objects/trace.object.ts',
    source: traceObjectSource,
  },
  {
    id: 'segment-object',
    name: 'segment.object.ts',
    path: 'src/objects/segment.object.ts',
    source: segmentObjectSource,
  },
  {
    id: 'poi-object',
    name: 'poi.object.ts',
    path: 'src/objects/poi.object.ts',
    source: poiObjectSource,
  },
  {
    id: 'route-object',
    name: 'route.object.ts',
    path: 'src/objects/route.object.ts',
    source: routeObjectSource,
  },
  {
    id: 'view-traces',
    name: 'traces.view.ts',
    path: 'src/views/traces.view.ts',
    source: tracesViewSource,
  },
  {
    id: 'view-exposed',
    name: 'exposed-segments.view.ts',
    path: 'src/views/exposed-segments.view.ts',
    source: exposedSegmentsViewSource,
  },
  {
    id: 'nav-traces',
    name: 'traces.navigation-menu-item.ts',
    path: 'src/navigation-menu-items/traces.navigation-menu-item.ts',
    source: tracesNavItemSource,
  },
  {
    id: 'nav-exposed',
    name: 'exposed-segments.navigation-menu-item.ts',
    path: 'src/navigation-menu-items/exposed-segments.navigation-menu-item.ts',
    source: exposedSegmentsNavItemSource,
  },
  {
    id: 'nav-sheltered-segments',
    name: 'sheltered-segments.navigation-menu-item.ts',
    path: 'src/navigation-menu-items/sheltered-segments.navigation-menu-item.ts',
    source: shelteredSegmentsNavItemSource,
  },
  {
    id: 'nav-traces-from-route',
    name: 'traces-from-route.navigation-menu-item.ts',
    path: 'src/navigation-menu-items/traces-from-route.navigation-menu-item.ts',
    source: tracesFromRouteNavItemSource,
  },
  {
    id: 'nav-pois',
    name: 'pois.navigation-menu-item.ts',
    path: 'src/navigation-menu-items/pois.navigation-menu-item.ts',
    source: poisNavItemSource,
  },
  {
    id: 'nav-terrain-zones',
    name: 'terrain-zones.navigation-menu-item.ts',
    path: 'src/navigation-menu-items/terrain-zones.navigation-menu-item.ts',
    source: terrainZonesNavItemSource,
  },
  {
    id: 'view-routes',
    name: 'routes.view.ts',
    path: 'src/views/routes.view.ts',
    source: routesViewSource,
  },
  {
    id: 'view-pois',
    name: 'pois.view.ts',
    path: 'src/views/pois.view.ts',
    source: poisViewSource,
  },
  {
    id: 'view-terrain-zones',
    name: 'terrain-zones.view.ts',
    path: 'src/views/terrain-zones.view.ts',
    source: terrainZonesViewSource,
  },
  {
    id: 'view-sheltered-segments',
    name: 'sheltered-segments.view.ts',
    path: 'src/views/sheltered-segments.view.ts',
    source: shelteredSegmentsViewSource,
  },
  {
    id: 'cmd-recompute-terrain',
    name: 'recompute-terrain.command-menu-item.ts',
    path: 'src/command-menu-items/recompute-terrain.command-menu-item.ts',
    source: recomputeTerrainCommandMenuItemSource,
  },
  {
    id: 'cmd-analyse-snow',
    name: 'analyse-snow.command-menu-item.ts',
    path: 'src/command-menu-items/analyse-snow.command-menu-item.ts',
    source: analyseSnowFromTraceCommandMenuItemSource,
  },
  {
    id: 'cmd-export-gpx',
    name: 'export-gpx.command-menu-item.ts',
    path: 'src/command-menu-items/export-gpx.command-menu-item.ts',
    source: exportGpxCommandMenuItemSource,
  },
  {
    id: 'cmd-recompute-wind',
    name: 'recompute-wind.command-menu-item.ts',
    path: 'src/command-menu-items/recompute-wind.command-menu-item.ts',
    source: recomputeWindCommandMenuItemSource,
  },
  {
    id: 'cmd-add-poi',
    name: 'add-poi.command-menu-item.ts',
    path: 'src/command-menu-items/add-poi.command-menu-item.ts',
    source: addPoiCommandMenuItemSource,
  },
  {
    id: 'cmd-exposed-segments',
    name: 'exposed-segments.command-menu-item.ts',
    path: 'src/command-menu-items/exposed-segments.command-menu-item.ts',
    source: exposedSegmentsCommandMenuItemSource,
  },
  {
    id: 'cmd-pin-poi',
    name: 'pin-poi.command-menu-item.ts',
    path: 'src/command-menu-items/pin-poi.command-menu-item.ts',
    source: pinPoiCommandMenuItemSource,
  },
  {
    id: 'cmd-set-poi-status',
    name: 'set-poi-status.command-menu-item.ts',
    path: 'src/command-menu-items/set-poi-status.command-menu-item.ts',
    source: setPoiStatusCommandMenuItemSource,
  },
  {
    id: 'cmd-set-zone-status',
    name: 'set-zone-status.command-menu-item.ts',
    path: 'src/command-menu-items/set-zone-status.command-menu-item.ts',
    source: setZoneStatusCommandMenuItemSource,
  },
  {
    id: 'cmd-set-route-status',
    name: 'set-route-status.command-menu-item.ts',
    path: 'src/command-menu-items/set-route-status.command-menu-item.ts',
    source: setRouteStatusCommandMenuItemSource,
  },
  {
    id: 'cmd-add-segment',
    name: 'add-segment.command-menu-item.ts',
    path: 'src/command-menu-items/add-segment.command-menu-item.ts',
    source: addSegmentCommandMenuItemSource,
  },
  {
    id: 'cmd-segments-of-route',
    name: 'segments-of-route.command-menu-item.ts',
    path: 'src/command-menu-items/segments-of-route.command-menu-item.ts',
    source: segmentsOfRouteCommandMenuItemSource,
  },
  {
    id: 'application-config',
    name: 'application-config.ts',
    path: 'src/application-config.ts',
    source: applicationConfigSource,
  },
];
