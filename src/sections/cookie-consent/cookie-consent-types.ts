export type ConsentDecision = 'accepted' | 'rejected' | 'custom';

export type CookieCategoryPreferences = {
  necessary: true;
  analytics: boolean;
  functional: boolean;
};

export type StoredCookieConsent = {
  categories: CookieCategoryPreferences;
  decision: ConsentDecision;
  timestamp: number;
  version: number;
};
