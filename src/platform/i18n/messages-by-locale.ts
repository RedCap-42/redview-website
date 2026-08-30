import { type Messages } from '@lingui/core';
import { type DocumentationSupportedLanguage } from 'twenty-shared/constants';

import { messages as frMessages } from '@/locales/generated/fr';

export const MESSAGES_BY_LOCALE: Record<
  DocumentationSupportedLanguage,
  Messages
> = {
  fr: frMessages,
};
