import { setupI18n, type I18n } from '@lingui/core';
import { type DocumentationSupportedLanguage } from 'twenty-shared/constants';

import { MESSAGES_BY_LOCALE } from './messages-by-locale';

const i18nCache = new Map<DocumentationSupportedLanguage, I18n>();

export const createI18nInstance = (
  locale: DocumentationSupportedLanguage,
): I18n => {
  let instance = i18nCache.get(locale);
  if (!instance) {
    instance = setupI18n({
      locale,
      messages: { [locale]: MESSAGES_BY_LOCALE[locale] },
    });
    i18nCache.set(locale, instance);
  }
  return instance;
};
