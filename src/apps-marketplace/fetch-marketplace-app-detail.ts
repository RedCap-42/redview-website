import { fetchMarketplaceApps } from './fetch-marketplace-apps';
import { type MarketplaceAppDetail } from './marketplace-app';

export async function fetchMarketplaceAppDetailBySlug(
  slug: string,
): Promise<MarketplaceAppDetail | null> {
  const apps = await fetchMarketplaceApps();
  const app = apps.find((candidate) => candidate.slug === slug);

  if (app === undefined) {
    return null;
  }

  return {
    ...app,
    description: app.tagline,
    screenshots: [],
    latestAvailableVersion: '3.2.0',
  };
}
