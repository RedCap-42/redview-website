import { SITE_URLS } from '@/platform/site-urls';

// Route handler (not a public/ file) so the RFC 9727 application/linkset+json
// content type survives the site's global nosniff header.
//
// RedView exposes its API surface under the app host, so every anchor is rooted
// on the public application URL.

const APP = process.env.NEXT_PUBLIC_APP_URL || 'https://app.redview.tech';

const apiCatalog = {
  linkset: [
    {
      anchor: `${APP}/api`,
      'service-doc': [{ href: SITE_URLS.docsApi, type: 'text/html' }],
    },
    {
      anchor: `${APP}/api/traces`,
      'service-doc': [{ href: SITE_URLS.docsUserGuide, type: 'text/html' }],
    },
    {
      anchor: `${APP}/api/terrain`,
      'service-doc': [{ href: SITE_URLS.docsGettingStarted, type: 'text/html' }],
    },
  ],
};

export const dynamic = 'force-static';

export async function GET() {
  return new Response(JSON.stringify(apiCatalog, null, 2), {
    headers: {
      'Content-Type':
        'application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
