import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import translationEN from './locales/en/translation.json';
import translationAR from './locales/ar/translation.json';

// The translations
const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

// Retrieve language preference from local storage, or default to 'en'
const savedLanguage = localStorage.getItem('language') || 'ar';

i18n
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .init({
    resources, // Load translations from resources
    lng: savedLanguage, // Set initial language from local storage
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
