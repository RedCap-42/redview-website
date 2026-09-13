import { type MetadataRoute } from 'next';

import { getRobotsDisallowedRoutePaths } from '@/platform/routing';
import { getSiteUrl } from '@/platform/seo';

const ALWAYS_DISALLOW: readonly string[] = [
  '/api/',
  '/apps',
  '/apps/',
  '/enterprise/activate',
  '/halftone',
];

// Modern AI Search, Retrieval, Grounding & Foundation Pretraining user-agents
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
  'CCBot', // Common Crawl — foundation dataset for frontier LLMs
  'DeepSeekBot', // DeepSeek web indexing crawler
  'deepseek-ai', // DeepSeek AI agent
  'Bytespider', // ByteDance / TikTok AI crawler
  'Amazonbot', // Amazon Alexa & Bedrock AI crawler
  'DuckAssistBot', // DuckDuckGo AI search assistant
  'Diffbot', // Knowledge graph semantic AI crawler
];

// Social Media Link Preview Scrapers (Meta / Instagram, X / Twitter, WhatsApp, etc.)
const SOCIAL_PREVIEW_BOTS: readonly string[] = [
  'facebookexternalhit', // Meta Instagram / Facebook link preview scraper
  'Facebot', // Facebook crawler
  'Twitterbot', // X / Twitter Card validator & previewer
  'LinkedInBot', // LinkedIn link preview generator
  'WhatsApp', // WhatsApp link preview thumbnail scraper
  'TelegramBot', // Telegram rich link preview crawler
  'Discordbot', // Discord embed preview generator
  'Slackbot', // Slack rich link unfurler
  'Pinterestbot', // Pinterest pin & rich preview bot
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
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: disallowedPaths,
      },
      // Explicit allow rules for major search engines
      {
        userAgent: [...MAJOR_SEARCH_ENGINES],
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: disallowedPaths,
      },
      // Explicit allow rules for social media link preview scrapers (Instagram, Facebook, etc.)
      {
        userAgent: [...SOCIAL_PREVIEW_BOTS],
        allow: ['/'],
        disallow: ['/api/'],
      },
      // Explicit allow rules for AI search, retrieval and citation crawlers
      {
        userAgent: [...AI_SEARCH_AND_RETRIEVAL_BOTS],
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: disallowedPaths,
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}

