import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const useLanguageSync = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Update HTML lang attribute when language changes
    const htmlElement = document.getElementById('html-root');
    if (htmlElement) {
      htmlElement.setAttribute('lang', i18n.language);
    }
  }, [i18n.language]);
};

export default useLanguageSync;
