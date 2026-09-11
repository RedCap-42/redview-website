import { type MessageDescriptor } from '@lingui/core';
import { type Metadata } from 'next';
import {
  DOCUMENTATION_DEFAULT_LANGUAGE,
  type DocumentationSupportedLanguage,
} from 'twenty-shared/constants';

import { createI18nInstance } from '@/platform/i18n/create-i18n-instance';
import { WEBSITE_LOCALE_LIST } from '@/platform/i18n/website-locale-list';

import { getSiteUrl } from './get-site-url';

const SITE_NAME = 'RedView';
const TWITTER_HANDLE = '@RedView3D';
const DEFAULT_OG_IMAGE_PATH = '/images/og/redview-preview.png?v=2';

type MetadataText = MessageDescriptor | string;

export type BuildPageMetadataInput = {
  description: MetadataText;
  indexed?: boolean;
  locale: DocumentationSupportedLanguage;
  locales?: readonly DocumentationSupportedLanguage[];
  ogImagePath?: string;
  path: string;
  title: MetadataText;
};

const localizePath = (
  locale: DocumentationSupportedLanguage,
  path: string,
): string => {
  if (locale === DOCUMENTATION_DEFAULT_LANGUAGE) return path;
  return path === '/' ? `/${locale}` : `/${locale}${path}`;
};

const buildLanguageAlternates = (
  path: string,
  locales: readonly DocumentationSupportedLanguage[],
): Record<string, string> => {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = localizePath(locale, path);
  }
  languages['x-default'] = localizePath(DOCUMENTATION_DEFAULT_LANGUAGE, path);
  return languages;
};

export function buildPageMetadata({
  description,
  indexed = true,
  locale,
  locales = WEBSITE_LOCALE_LIST,
  ogImagePath = DEFAULT_OG_IMAGE_PATH,
  path,
  title,
}: BuildPageMetadataInput): Metadata {
  const canonical = localizePath(locale, path);
  const i18n = createI18nInstance(locale);
  let resolvedTitle = typeof title === 'string' ? title : i18n._(title);
  if (typeof title === 'object' && title !== null) {
    if (!resolvedTitle || resolvedTitle === title.id) {
      resolvedTitle = (title as { message?: string }).message || 'RedView';
    }
  }
  if (!resolvedTitle || (resolvedTitle.length <= 6 && !resolvedTitle.toLowerCase().includes('redview'))) {
    resolvedTitle = 'RedView — Cartographie 3D Haute Résolution & LiDAR Outdoor';
  }

  let resolvedDescription =
    typeof description === 'string' ? description : i18n._(description);
  if (typeof description === 'object' && description !== null) {
    if (!resolvedDescription || resolvedDescription === description.id) {
      resolvedDescription = (description as { message?: string }).message || '';
    }
  }
  const siteUrl = getSiteUrl();
  const absoluteOgImageUrl = ogImagePath.startsWith('http')
    ? ogImagePath
    : `${siteUrl}${ogImagePath.startsWith('/') ? ogImagePath : `/${ogImagePath}`}`;

  const ogImages = [
    {
      url: absoluteOgImageUrl,
      width: 1200,
      height: 630,
      type: 'image/png',
      alt: resolvedTitle,
    },
  ];

  return {
    metadataBase: new URL(getSiteUrl()),
    title: { absolute: resolvedTitle },
    description: resolvedDescription,
    keywords: [
      'RedView',
      'RedView 3D',
      'Cartographie 3D',
      'LiDAR 20cm',
      'Relief 40cm',
      'Traces GPX',
      'Outdoor 3D map',
      'Bikepacking',
      'Ultra endurance',
      'Trail running',
      'Ski de randonnée',
      'Topographie montagne',
      'MNT IGN',
      'Simulation ensoleillement',
      'Fatmap alternative',
      'Climb-Seeker',
      'Visualisateur 3D WebGL',
    ],
    authors: [
      { name: 'RedView' },
      { name: 'Victor Bouscavet', url: 'https://www.instagram.com/victor_bouscavet/' },
      { name: 'Simon Farina', url: 'https://www.instagram.com/simon_farina_/' },
    ],
    creator: 'RedView',
    publisher: 'RedView',
    robots: {
      index: indexed,
      follow: true,
      googleBot: {
        index: indexed,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.svg?v=redview1', type: 'image/svg+xml' },
        { url: '/favicon.ico?v=redview1', sizes: 'any' },
      ],
      apple: [
        { url: '/apple-icon.svg?v=redview1', type: 'image/svg+xml' },
        { url: '/apple-touch-icon.png?v=redview1', sizes: '180x180', type: 'image/png' },
      ],
    },
    alternates: {
      canonical,
      languages: buildLanguageAlternates(path, locales),
    },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url: canonical,
      siteName: SITE_NAME,
      locale,
      type: 'website',
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description: resolvedDescription,
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      images: [absoluteOgImageUrl],
    },
    verification: {
      google: '-PvqHT0f2bilm7Y-u4EBDLbOXepktqysHtsZZzz6SvA',
    },
  };
}
