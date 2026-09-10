import { getCommunityStats } from '@/platform/community';
import {
  getRouteI18n,
  type LocaleRouteParams,
} from '@/platform/i18n/get-route-i18n';
import {
  buildOrganizationJsonLd,
  buildRouteMetadata,
  buildSoftwareApplicationJsonLd,
  buildWebSiteJsonLd,
  JsonLd,
} from '@/platform/seo';
import { Faq } from '@/sections/faq';
import { FeatureCards } from '@/sections/feature-cards';
import { Helped } from '@/sections/helped';
import { HomeHero } from '@/sections/home-hero';
import { Menu } from '@/sections/menu';
import { Problem } from '@/sections/problem';
import { HomeStepper } from '@/sections/home-stepper';
import { ThreeCards } from '@/sections/three-cards';
import { TrustedBy } from '@/sections/trusted-by';

export const generateMetadata = buildRouteMetadata('home');

export default async function HomePage({
  params,
}: {
  params: Promise<LocaleRouteParams>;
}) {
  const [, communityStats] = await Promise.all([
    getRouteI18n(params),
    getCommunityStats(),
  ]);

  return (
    <>
      <JsonLd data={buildOrganizationJsonLd()} />
      <JsonLd data={buildSoftwareApplicationJsonLd()} />
      <JsonLd data={buildWebSiteJsonLd()} />
      <Menu communityStats={communityStats} scheme="dark" />
      <main>
        <HomeHero />
        <TrustedBy />
        <Problem />
        <ThreeCards />
        <HomeStepper />
        <FeatureCards />
        <Helped />
        <Faq />
      </main>
    </>
  );
}

