import { useTranslations as useTranslationsBase } from 'next-intl';

// Type-safe translation hooks
export function useTranslations<T extends keyof IntlMessages>(
  namespace?: T
) {
  return useTranslationsBase(namespace);
}



