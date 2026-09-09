'use client';

import {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { useSearchParams } from 'next/navigation';

import { ContactCalModal } from './ContactCalModal';
import { ContactCalModalContext } from './contact-cal-modal-context';

export function shouldOpenFeedbackFromUrl(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const params = new URLSearchParams(window.location.search);
    const hash = window.location.hash.toLowerCase();

    if (
      params.has('feedback') ||
      params.has('formulaire') ||
      params.has('questionnaire') ||
      params.get('modal') === 'feedback' ||
      hash.includes('feedback') ||
      hash.includes('formulaire') ||
      hash.includes('questionnaire')
    ) {
      return true;
    }
  } catch {
    // Ignore URL parse errors
  }
  return false;
}

export function cleanFeedbackUrlParams() {
  if (typeof window === 'undefined') return;
  try {
    const url = new URL(window.location.href);
    let changed = false;
    const paramsToRemove = [
      'feedback',
      'formulaire',
      'questionnaire',
      'step',
      'email',
      'firstName',
      'firstname',
      'prenom',
      'lastName',
      'lastname',
      'nom',
      'country',
      'pays',
      'feature',
      'feedbackType',
      'type',
      'category',
      'description',
      'modal',
    ];
    for (const key of paramsToRemove) {
      if (url.searchParams.has(key)) {
        url.searchParams.delete(key);
        changed = true;
      }
    }
    if (
      url.hash === '#feedback' ||
      url.hash === '#formulaire' ||
      url.hash === '#questionnaire'
    ) {
      url.hash = '';
      changed = true;
    }
    if (changed) {
      const nextPath =
        url.pathname +
        (url.searchParams.toString() ? `?${url.searchParams.toString()}` : '') +
        url.hash;
      window.history.replaceState(window.history.state, '', nextPath);
    }
  } catch {
    // Ignore history error
  }
}

function UrlFeedbackWatcher({ onTrigger }: { onTrigger: () => void }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (shouldOpenFeedbackFromUrl()) {
      onTrigger();
    }
  }, [searchParams, onTrigger]);

  return null;
}

export function ContactCalModalRoot({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    cleanFeedbackUrlParams();
  }, []);

  useEffect(() => {
    if (shouldOpenFeedbackFromUrl()) {
      setIsOpen(true);
    }

    const handleHashOrPopState = () => {
      if (shouldOpenFeedbackFromUrl()) {
        setIsOpen(true);
      }
    };

    window.addEventListener('hashchange', handleHashOrPopState);
    window.addEventListener('popstate', handleHashOrPopState);

    return () => {
      window.removeEventListener('hashchange', handleHashOrPopState);
      window.removeEventListener('popstate', handleHashOrPopState);
    };
  }, []);

  const contextValue = useMemo(
    () => ({ openContactCalModal: handleOpen }),
    [handleOpen],
  );

  return (
    <ContactCalModalContext.Provider value={contextValue}>
      <Suspense fallback={null}>
        <UrlFeedbackWatcher onTrigger={handleOpen} />
      </Suspense>
      {children}
      <ContactCalModal onClose={handleClose} open={isOpen} />
    </ContactCalModalContext.Provider>
  );
}
