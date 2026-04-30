import {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react';

import {en} from '../locales/en';
import {Locale, LocaleStrings} from '../locales/types';
import {zh} from '../locales/zh';

const LOCALE_STORAGE_KEY = 'resume-locale';

const localeMap: Record<Locale, LocaleStrings> = {en, zh};

interface LocaleContextValue {
  locale: Locale;
  strings: LocaleStrings;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

// eslint-disable-next-line react-memo/require-memo
function detectBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') return 'en';
  return navigator.language.slice(0, 2) === 'zh' ? 'zh' : 'en';
}

// eslint-disable-next-line react-memo/require-memo
function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (stored === 'zh' || stored === 'en') return stored;
  return detectBrowserLocale();
}

export function LocaleProvider({children}: {children: React.ReactNode}) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    setLocaleState(getInitialLocale());
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
  }, []);

  const strings = useMemo(() => localeMap[locale], [locale]);
  const value = useMemo(() => ({locale, strings, setLocale}), [locale, strings, setLocale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within a LocaleProvider');
  return ctx;
}
