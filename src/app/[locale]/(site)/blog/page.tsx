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
import { BlogPlaceholder } from '@/sections/blog';
import { Menu } from '@/sections/menu';

export const generateMetadata = buildRouteMetadata('blog');

export default async function BlogPage({
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
            { name: 'Blog', path: '/blog' },
          ],
          locale,
        )}
      />
      <Menu communityStats={communityStats} />
      <main>
        <BlogPlaceholder />
      </main>
    </>
  );
}
