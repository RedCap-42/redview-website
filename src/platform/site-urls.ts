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
  appWelcome: process.env.NEXT_PUBLIC_APP_URL || 'https://app.redview.tech',
  calBooking: 'https://cal.com/forms/f7841033-0a20-4958-8c92-4e34ec128a81',
  discord: 'https://discord.gg/cx5n4Jzs57',
  docsApi: 'https://redview.tech/blog',
  docsDevelopers: 'https://redview.tech/blog',
  docsGettingStarted: 'https://redview.tech/customers',
  docsMcp: 'https://redview.tech/customers',
  docsUserGuide: 'https://redview.tech/customers',
  github: 'https://github.com/RedView3D',
  instagramSimon: 'https://www.instagram.com/simon_farina_/',
  instagramVictor: 'https://www.instagram.com/victor_bouscavet/',
  linkedin: 'https://www.linkedin.com/company/redview',
  trustCenter: 'https://redview.tech/privacy-policy',
  x: 'https://x.com/RedView3D',
};