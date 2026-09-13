import { type ContactColumn } from '../types/contact-column';

export const COLUMNS: ContactColumn[] = [
  { id: 'company', label: 'Traces', width: 180, isFirstColumn: true },
  { id: 'url', label: 'GPX', width: 140 },
  { id: 'createdBy', label: 'Créé par', width: 150 },
  { id: 'address', label: 'Zone', width: 140 },
  { id: 'accountOwner', label: 'Responsable', width: 150 },
  { id: 'icp', label: 'Neige', width: 80 },
  { id: 'arr', label: 'Dénivelé (m)', width: 120 },
  { id: 'industry', label: 'Discipline', width: 140 },
];
