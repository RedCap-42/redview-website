import { getCommunityStats } from '@/platform/community';
import {
  getRouteI18n,
  type LocaleRouteParams,
} from '@/platform/i18n/get-route-i18n';
import { resolveLocaleParam } from '@/platform/i18n/resolve-locale-param';
import {
  buildBreadcrumbListJsonLd,
  buildRouteMetadata,
  JsonLd,
} from '@/platform/seo';
import { Menu } from '@/sections/menu';
import { WhyRedViewEditorials } from '@/sections/why-redview-editorial';
import { WhyRedViewHero } from '@/sections/why-redview-hero';
import { WhyRedViewMarquee } from '@/sections/why-redview-marquee';
import { WhyRedViewSignoff } from '@/sections/why-redview-signoff';

export const generateMetadata = buildRouteMetadata('whyRedView');

export default async function WhyRedViewPage({
  params,
}: {
  params: Promise<LocaleRouteParams>;
}) {
  const [, communityStats] = await Promise.all([
    getRouteI18n(params),
    getCommunityStats(),
  ]);
  const locale = resolveLocaleParam((await params).locale);

  return (
    <>
      <JsonLd
        data={buildBreadcrumbListJsonLd(
          [
            { name: 'Home', path: '/' },
            { name: 'Pourquoi RedView', path: '/why-redview' },
          ],
          locale,
        )}
      />
      <Menu communityStats={communityStats} scheme="dark" />
      <main>
        <WhyRedViewHero />
        <WhyRedViewEditorials />
        <WhyRedViewMarquee />
        <WhyRedViewSignoff />
      </main>
    </>
  );
}
