import {FC, memo, useCallback} from 'react';

import {useLocale} from '../../context/LocaleContext';

const LanguageSwitcher: FC = memo(() => {
  const {locale, setLocale} = useLocale();

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'en' ? 'zh' : 'en');
  }, [locale, setLocale]);

  return (
    <button
      aria-label={locale === 'en' ? 'Switch to Chinese' : '切换到英文'}
      className="-m-1.5 rounded-md p-1.5 text-sm font-bold text-neutral-100 hover:text-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
      onClick={toggleLocale}>
      {locale === 'en' ? '中文' : 'EN'}
    </button>
  );
});

LanguageSwitcher.displayName = 'LanguageSwitcher';
export default LanguageSwitcher;
