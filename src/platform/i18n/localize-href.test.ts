import { localizeHref } from './localize-href';
import { stripLocale } from './strip-locale';

describe('localizeHref', () => {
  it('leaves source-locale hrefs unprefixed', () => {
    expect(localizeHref('fr', '/pricing')).toBe('/pricing');
  });

  it('prefixes non-source locales with their url segment', () => {
    expect(localizeHref('en', '/pricing')).toBe('/en/pricing');
    expect(localizeHref('en', '/')).toBe('/en');
  });

  it('re-localizes an already-prefixed href', () => {
    expect(localizeHref('fr', '/fr/pricing')).toBe('/pricing');
  });

  it('preserves query strings and hashes', () => {
    expect(localizeHref('en', '/pricing?seat=5#faq')).toBe(
      '/en/pricing?seat=5#faq',
    );
  });

  it('passes through external and protocol-relative urls', () => {
    expect(localizeHref('fr', 'https://example.com/a')).toBe(
      'https://example.com/a',
    );
    expect(localizeHref('fr', '//cdn.example.com/x')).toBe(
      '//cdn.example.com/x',
    );
  });
});

describe('stripLocale', () => {
  it('removes a known locale prefix', () => {
    expect(stripLocale('/fr/pricing')).toBe('/pricing');
    expect(stripLocale('/fr')).toBe('/');
  });

  it('leaves unprefixed paths alone', () => {
    expect(stripLocale('/pricing')).toBe('/pricing');
  });
});
