'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import {
  getStoredConsent,
  persistConsent,
} from './cookie-consent-storage';
import {
  type CookieCategoryPreferences,
  type StoredCookieConsent,
} from './cookie-consent-types';

type CookieConsentContextValue = {
  acceptAll: () => void;
  closePreferences: () => void;
  consent: StoredCookieConsent | null;
  isBannerOpen: boolean;
  isInitialized: boolean;
  isModalOpen: boolean;
  openPreferences: () => void;
  rejectAll: () => void;
  savePreferences: (prefs: CookieCategoryPreferences) => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [consent, setConsent] = useState<StoredCookieConsent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const existing = getStoredConsent();
    setConsent(existing);
    setIsInitialized(true);
  }, []);

  const acceptAll = useCallback(() => {
    const updated = persistConsent({
      categories: {
        necessary: true,
        analytics: true,
        functional: true,
      },
      decision: 'accepted',
    });
    setConsent(updated);
    setIsModalOpen(false);
  }, []);

  const rejectAll = useCallback(() => {
    const updated = persistConsent({
      categories: {
        necessary: true,
        analytics: false,
        functional: false,
      },
      decision: 'rejected',
    });
    setConsent(updated);
    setIsModalOpen(false);
  }, []);

  const savePreferences = useCallback((prefs: CookieCategoryPreferences) => {
    const updated = persistConsent({
      categories: {
        ...prefs,
        necessary: true,
      },
      decision: 'custom',
    });
    setConsent(updated);
    setIsModalOpen(false);
  }, []);

  const openPreferences = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closePreferences = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const isBannerOpen = isInitialized && consent === null;

  const value = useMemo(
    () => ({
      acceptAll,
      closePreferences,
      consent,
      isBannerOpen,
      isInitialized,
      isModalOpen,
      openPreferences,
      rejectAll,
      savePreferences,
    }),
    [
      acceptAll,
      closePreferences,
      consent,
      isBannerOpen,
      isInitialized,
      isModalOpen,
      openPreferences,
      rejectAll,
      savePreferences,
    ],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent(): CookieConsentContextValue {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
}
