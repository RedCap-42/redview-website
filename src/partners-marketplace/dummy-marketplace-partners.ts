import { type RankedMarketplacePartner } from './marketplace-partner';

// Structural fixtures only — used when NEXT_PUBLIC_USE_DUMMY_PARTNERS=1 to
// exercise the marketplace layout without hitting the partner API.
//
// These entries are deliberately EMPTY of editorial content: no invented
// names, clients, projects or testimonials. Real partner content comes from
// the partner API (fetch-live-marketplace-partners). If you need to render
// the grid locally, fill these in with content you actually have the right
// to publish.
export const DUMMY_PARTNERS: RankedMarketplacePartner[] = [
  {
    slug: 'placeholder-partner-1',
    partnerTier: null,
    serviceCount: 0,
    approvedCaseStudyCount: 0,
    approvedCaseStudyWithCoverCount: 0,
    rotationKey:
      '60973a6d38f6a1a042b35e2e547656b8170aff362d6e64544907f2317d8ff5ae',
    name: 'Partenaire 1',
    description: '',
    calendarLink: '',
    partnerScope: ['ADVISORY'],
    region: ['EUROPE'],
    languagesSpoken: ['FRENCH'],
    hourlyRateUsd: null,
    projectBudgetMinUsd: null,
    links: {
      website: null,
      linkedin: null,
      x: null,
      github: null,
    },
    profilePictureUrl: '',
    city: '',
    country: '',
    skills: [],
    services: [],
    portfolio: [],
    clients: [],
  },
  {
    slug: 'placeholder-partner-2',
    partnerTier: null,
    serviceCount: 0,
    approvedCaseStudyCount: 0,
    approvedCaseStudyWithCoverCount: 0,
    rotationKey:
      'c1f4a9d2e5b7481c9a2e6f3d8b0c5a7e4f1d2c8b6a9e3f7d0b4c1a8e5f2d9b3c',
    name: 'Partenaire 2',
    description: '',
    calendarLink: '',
    partnerScope: ['SOLUTIONING'],
    region: ['EUROPE'],
    languagesSpoken: ['ENGLISH'],
    hourlyRateUsd: null,
    projectBudgetMinUsd: null,
    links: {
      website: null,
      linkedin: null,
      x: null,
      github: null,
    },
    profilePictureUrl: '',
    city: '',
    country: '',
    skills: [],
    services: [],
    portfolio: [],
    clients: [],
  },
  {
    slug: 'placeholder-partner-3',
    partnerTier: null,
    serviceCount: 0,
    approvedCaseStudyCount: 0,
    approvedCaseStudyWithCoverCount: 0,
    rotationKey:
      '8b2cb1cea581b13a5664a71434b204234674084488298db6ea2ce1f3d327b21b',
    name: 'Partenaire 3',
    description: '',
    calendarLink: '',
    partnerScope: ['DEVELOPMENT'],
    region: ['EUROPE'],
    languagesSpoken: ['FRENCH', 'ENGLISH'],
    hourlyRateUsd: null,
    projectBudgetMinUsd: null,
    links: {
      website: null,
      linkedin: null,
      x: null,
      github: null,
    },
    profilePictureUrl: '',
    city: '',
    country: '',
    skills: [],
    services: [],
    portfolio: [],
    clients: [],
  },
];
