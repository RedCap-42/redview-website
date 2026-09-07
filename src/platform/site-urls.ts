// Every external destination the site links to, in one place. Sections and
// data files never inline these.
export const SITE_URLS: Record<
  | 'appWelcome'
  | 'calBooking'
  | 'discord'
  | 'docsApi'
  | 'docsDevelopers'
  | 'docsGettingStarted'
  | 'docsMcp'
  | 'docsUserGuide'
  | 'github'
  | 'instagramSimon'
  | 'instagramVictor'
  | 'linkedin'
  | 'trustCenter'
  | 'x',
  string
> = {
  appWelcome: process.env.NEXT_PUBLIC_APP_URL || 'http://app.141.145.220.99.sslip.io',
  calBooking: 'https://cal.com/forms/f7841033-0a20-4958-8c92-4e34ec128a81',
  discord: 'https://discord.gg/cx5n4Jzs57',
  docsApi: 'https://red-view-landing-page.vercel.app/blog',
  docsDevelopers: 'https://red-view-landing-page.vercel.app/blog',
  docsGettingStarted: 'https://red-view-landing-page.vercel.app/customers',
  docsMcp: 'https://red-view-landing-page.vercel.app/customers',
  docsUserGuide: 'https://red-view-landing-page.vercel.app/customers',
  github: 'https://github.com/RedView3D',
  instagramSimon: 'https://www.instagram.com/simon_farina_/',
  instagramVictor: 'https://www.instagram.com/victor_bouscavet/',
  linkedin: 'https://www.linkedin.com/company/redview',
  trustCenter: 'https://red-view-landing-page.vercel.app/privacy-policy',
  x: 'https://x.com/RedView3D',
};