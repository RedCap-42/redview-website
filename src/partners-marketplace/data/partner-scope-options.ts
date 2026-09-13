import { msg } from '@lingui/core/macro';

// Kept in sync with partner-application wizard options — duplicated here so
// partners-marketplace does not import from partner-application.
export const PARTNER_SCOPE_OPTIONS = [
  {
    value: 'ADVISORY',
    label: msg`Advisory & Discovery`,
    description: msg`Upfront consulting, scoping, strategy.`,
    examples: msg`Terrain audit · Requirements · Route scoping · Risk assessment · Massif expertise`,
  },
  {
    value: 'SOLUTIONING',
    label: msg`Solutioning`,
    description: msg`What can be set up without writing code.`,
    examples: msg`LiDAR & DEM pipelines · Data imports · No-code workflows · Dashboards · OSM/IGN integrations`,
  },
  {
    value: 'DEVELOPMENT',
    label: msg`Custom Development`,
    description: msg`Anything that needs a developer.`,
    examples: msg`Custom Apps · GPX/BRouter scripts · AI/agent integrations`,
  },
  {
    value: 'HOSTING',
    label: msg`Hosting & Infrastructure`,
    description: msg`Anything that needs devops skills.`,
    examples: msg`Self-hosted (Docker/K8s) · Cloud architecture · Tile storage · Scaling · Monitoring`,
  },
  {
    value: 'SUPPORT',
    label: msg`Training, Adoption & Support`,
    description: msg`Team-side rollout & ongoing support.`,
    examples: msg`Onboarding · Documentation · Field training · L1/L2 support · Managed services`,
  },
] as const;
