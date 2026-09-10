import { type MetadataRoute } from 'next';

import { getRobotsDisallowedRoutePaths } from '@/platform/routing';
import { getSiteUrl } from '@/platform/seo';

const ALWAYS_DISALLOW: readonly string[] = [
  '/api/',
  '/_next/',
  '/compare-pricing/',
  '/enterprise/activate',
  '/halftone',
];

// Modern AI Search, Retrieval & Grounding user-agents
const AI_SEARCH_AND_RETRIEVAL_BOTS: readonly string[] = [
  'OAI-SearchBot', // OpenAI ChatGPT Search / SearchGPT
  'ChatGPT-User', // ChatGPT live browser on behalf of users
  'GPTBot', // OpenAI foundation crawler & web indexing
  'PerplexityBot', // Perplexity Search indexing and retrieval
  'ClaudeBot', // Anthropic Claude training & indexing
  'Claude-Web', // Anthropic Claude live web fetcher
  'anthropic-ai', // Anthropic general web agent
  'Google-Extended', // Google Gemini / Vertex grounding control
  'Applebot-Extended', // Apple Intelligence web indexing
  'Meta-ExternalAgent', // Meta AI & Llama web crawler
  'cohere-ai', // Cohere AI crawler
  'Diffbot', // Knowledge graph semantic AI crawler
];

// Major Search Engines
const MAJOR_SEARCH_ENGINES: readonly string[] = [
  'Googlebot',
  'Bingbot',
  'Applebot',
  'DuckDuckBot',
  'YandexBot',
  'Baiduspider',
];

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  const disallowedPaths = [
    ...ALWAYS_DISALLOW,
    ...getRobotsDisallowedRoutePaths(),
  ];

  return {
    rules: [
      // Standard default crawler rule
      {
        userAgent: '*',
        allow: '/',
        disallow: disallowedPaths,
      },
      // Explicit allow rules for major search engines
      {
        userAgent: [...MAJOR_SEARCH_ENGINES],
        allow: '/',
        disallow: disallowedPaths,
      },
      // Explicit allow rules for AI search, retrieval and citation crawlers
      {
        userAgent: [...AI_SEARCH_AND_RETRIEVAL_BOTS],
        allow: '/',
        disallow: disallowedPaths,
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}

