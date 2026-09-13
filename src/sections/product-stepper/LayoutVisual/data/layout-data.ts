import { type MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';

import { type LayoutFieldDefinition } from '../types/layout-field-definition';
import { type LayoutNavItemDefinition } from '../types/layout-nav-item-definition';

export const LAYOUT_EDITOR_CONTENT: {
  fields: LayoutFieldDefinition[];
  navItems: LayoutNavItemDefinition[];
  sectionLabels: Record<string, MessageDescriptor>;
} = {
  fields: [
    {
      id: 'url',
      icon: 'link',
      label: msg`GPX`,
      type: msg`Lien`,
      section: 'General',
      visible: true,
    },
    {
      id: 'account-owner',
      icon: 'user',
      label: msg`Responsable`,
      type: msg`Relation`,
      section: 'General',
      visible: true,
    },
    {
      id: 'revenue',
      icon: 'money',
      label: msg`Dénivelé`,
      type: msg`Nombre`,
      section: 'General',
      visible: true,
    },
    {
      id: 'icp',
      icon: 'target',
      label: msg`Neige`,
      type: msg`Booléen`,
      section: 'Additional',
      visible: false,
    },
    {
      id: 'employees',
      icon: 'users',
      label: msg`Longueur`,
      type: msg`Nombre`,
      section: 'Other',
      visible: true,
    },
    {
      id: 'address',
      icon: 'map',
      label: msg`Zone`,
      type: msg`Localisation`,
      section: 'Other',
      visible: true,
    },
    {
      id: 'creation-date',
      icon: 'calendar',
      label: msg`Date de création`,
      type: msg`Date & heure`,
      section: 'Other',
      visible: true,
    },
  ],
  navItems: [
    { icon: 'building', label: msg`Traces`, isActive: true, color: 'blue' },
    { icon: 'user', label: msg`Segments`, isActive: false, color: 'blue' },
    {
      icon: 'target',
      label: msg`Points d'intérêt`,
      isActive: false,
      color: 'red',
    },
    {
      icon: 'checkbox',
      label: msg`Analyses`,
      isActive: false,
      color: 'turquoise',
    },
    { icon: 'notes', label: msg`Notes`, isActive: false, color: 'turquoise' },
    {
      icon: 'dashboard',
      label: msg`Profils`,
      isActive: false,
      color: 'gray',
    },
    {
      icon: 'automation',
      label: msg`Routage`,
      isActive: false,
      color: 'orange',
      isFolder: true,
      children: [
        { icon: 'automation', label: msg`Profils BRF`, color: 'gray' },
        { icon: 'history', label: msg`Traces récentes`, color: 'gray' },
        { icon: 'versions', label: msg`Versions`, color: 'gray' },
      ],
    },
  ],
  sectionLabels: {
    Additional: msg`Avancé`,
    General: msg`Général`,
    Other: msg`Autres`,
  },
};
