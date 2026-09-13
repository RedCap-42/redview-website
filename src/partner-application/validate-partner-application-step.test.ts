import { INITIAL_PARTNER_APPLICATION_STATE } from './partner-application-state';
import { validatePartnerApplicationStep } from './validate-partner-application-step';

const validExperienceNotes =
  'Built a custom Twenty app for a property-management client, modeled leases and ' +
  'tenants as data models, automated renewal workflows, and shipped a front component ' +
  'for the broker dashboard with role-based views.';

describe('validatePartnerApplicationStep', () => {
  it('requires experience milestones, narrative, and proof URL on Experience', () => {
    const errors = validatePartnerApplicationStep({
      ...INITIAL_PARTNER_APPLICATION_STATE,
      stepIndex: 3,
    });
    expect(errors.terrainExperience).toBe('required');
    expect(errors.terrainExperienceNotes).toBe('required');
    expect(errors.terrainExperienceProofLink).toBe('required');
  });

  it('rejects a narrative under 200 characters on Experience', () => {
    const errors = validatePartnerApplicationStep({
      ...INITIAL_PARTNER_APPLICATION_STATE,
      stepIndex: 3,
      terrainExperience: ['WORKFLOWS'],
      terrainExperienceNotes: 'Too short for a real implementation narrative.',
      terrainExperienceProofLink: 'https://www.loom.com/share/example',
    });
    expect(errors.terrainExperienceNotes).toBe('too_short');
  });

  it('rejects an invalid proof URL on Experience', () => {
    const errors = validatePartnerApplicationStep({
      ...INITIAL_PARTNER_APPLICATION_STATE,
      stepIndex: 3,
      terrainExperience: ['CUSTOM_APPS'],
      terrainExperienceNotes: validExperienceNotes,
      terrainExperienceProofLink: 'not-a-url',
    });
    expect(errors.terrainExperienceProofLink).toBe('invalid_url');
  });

  it('accepts a complete Experience step', () => {
    const errors = validatePartnerApplicationStep({
      ...INITIAL_PARTNER_APPLICATION_STATE,
      stepIndex: 3,
      terrainExperience: ['CUSTOM_APPS', 'DATA_MODELS'],
      terrainExperienceNotes: validExperienceNotes,
      terrainExperienceProofLink: 'https://www.loom.com/share/example',
    });
    expect(errors).toEqual({});
  });
});
