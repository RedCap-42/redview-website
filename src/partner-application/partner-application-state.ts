import { type PartnerCountryValue } from './data/partner-country-options';
import { type PartnerLanguageValue } from './data/partner-language-options';
import { type PartnerScopeValue } from './data/partner-scope-options';
import { type PartnerTeamTypeValue } from './data/partner-team-type-options';
import { type PartnerTerrainExperienceValue } from './data/partner-terrain-experience-options';

export type CountryFieldValue = PartnerCountryValue | '';

export type PartnerApplicationState = {
  stepIndex: number;

  // Identity
  name: string;
  email: string;
  company: string;
  website: string;

  // Profile
  linkedin: string;
  city: string;
  country: CountryFieldValue;
  languages: PartnerLanguageValue[];

  // Expertise
  typeOfTeam: PartnerTeamTypeValue | '';
  partnerScope: PartnerScopeValue[];
  skills: string[];

  // Experience (what terrain work they've shipped with RedView)
  terrainExperience: PartnerTerrainExperienceValue[];
  terrainExperienceNotes: string;
  terrainExperienceProofLink: string;

  // Commercials
  hourlyRate: string;
  projectBudgetMin: string;
  calendarLink: string;

  // Meta
  fieldErrors: Partial<Record<string, string>>;
  submitError: string | null;
  isSubmitting: boolean;
  isSubmitted: boolean;
};

// The scalar (string-valued) fields a single SET_FIELD action can target;
// multi-value fields (languages, partnerScope, skills, terrainExperience) have
// their own actions.
export type ScalarFieldName =
  | 'name'
  | 'email'
  | 'company'
  | 'website'
  | 'linkedin'
  | 'city'
  | 'country'
  | 'typeOfTeam'
  | 'terrainExperienceNotes'
  | 'terrainExperienceProofLink'
  | 'hourlyRate'
  | 'projectBudgetMin'
  | 'calendarLink';

export type PartnerApplicationAction =
  | { type: 'SET_FIELD'; field: ScalarFieldName; value: string }
  | { type: 'TOGGLE_SCOPE'; value: PartnerScopeValue }
  | { type: 'TOGGLE_LANGUAGE'; value: PartnerLanguageValue }
  | { type: 'TOGGLE_EXPERIENCE'; value: PartnerTerrainExperienceValue }
  | { type: 'SET_SKILLS'; value: string[] }
  | { type: 'GO_NEXT' }
  | { type: 'GO_BACK' }
  | { type: 'SET_SUBMITTING'; value: boolean }
  | { type: 'SET_SUBMIT_ERROR'; value: string | null }
  | { type: 'SET_SUBMITTED' }
  | { type: 'RESET' };

export const INITIAL_PARTNER_APPLICATION_STATE: PartnerApplicationState = {
  stepIndex: 0,
  name: '',
  email: '',
  company: '',
  website: '',
  linkedin: '',
  city: '',
  country: '',
  languages: [],
  typeOfTeam: '',
  partnerScope: [],
  skills: [],
  terrainExperience: [],
  terrainExperienceNotes: '',
  terrainExperienceProofLink: '',
  hourlyRate: '',
  projectBudgetMin: '',
  calendarLink: '',
  fieldErrors: {},
  submitError: null,
  isSubmitting: false,
  isSubmitted: false,
};
