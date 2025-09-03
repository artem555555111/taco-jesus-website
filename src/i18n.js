import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import plTranslation from './locales/pl/translation.json';
import enTranslation from './locales/en/translation.json';
import ukTranslation from './locales/uk/translation.json';

const resources = {
  pl: {
    translation: plTranslation
  },
  en: {
    translation: enTranslation
  },
  uk: {
    translation: ukTranslation
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pl', // Default to Polish
    debug: false,
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
      convertDetectedLanguage: (lng) => {
        // Map browser language codes to our supported languages
        if (lng.startsWith('uk') || lng.startsWith('ua')) return 'uk';
        if (lng.startsWith('en')) return 'en';
        if (lng.startsWith('pl')) return 'pl';
        return 'pl'; // Default fallback
      },
    },

    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;


