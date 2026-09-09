import { type CookieCategoryPreferences, type StoredCookieConsent } from './cookie-consent-types';

export const COOKIE_CONSENT_KEY = 'redview_cookie_consent';
export const COOKIE_CONSENT_VERSION = 1;
// 180 days (6 months) in milliseconds, compliant with French CNIL guidelines
const SIX_MONTHS_MS = 180 * 24 * 60 * 60 * 1000;

export const DEFAULT_PREFERENCES: CookieCategoryPreferences = {
  necessary: true,
  analytics: false,
  functional: false,
};

export function getStoredConsent(): StoredCookieConsent | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) {
      return null;
    }
    const parsed = JSON.parse(raw) as StoredCookieConsent;
    if (parsed.version !== COOKIE_CONSENT_VERSION) {
      return null;
    }
    // Check expiration (6 months)
    if (Date.now() - parsed.timestamp > SIX_MONTHS_MS) {
      window.localStorage.removeItem(COOKIE_CONSENT_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function persistConsent(consent: Omit<StoredCookieConsent, 'timestamp' | 'version'>): StoredCookieConsent {
  const fullConsent: StoredCookieConsent = {
    ...consent,
    timestamp: Date.now(),
    version: COOKIE_CONSENT_VERSION,
  };

  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(fullConsent));
      // Set backup cookie for edge or SSR if needed (180 days)
      const maxAgeSeconds = 180 * 24 * 60 * 60;
      document.cookie = `${COOKIE_CONSENT_KEY}=${encodeURIComponent(
        consent.decision,
      )}; path=/; max-age=${maxAgeSeconds}; SameSite=Lax`;
    } catch {
      // Ignore private browsing storage quota errors
    }
  }

  return fullConsent;
}
