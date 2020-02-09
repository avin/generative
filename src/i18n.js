import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { prepareTranslationObj } from '@/utils/helpers';
import translations from './translations';
import config from './config';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: prepareTranslationObj(translations, 'en'),
    },
    ru: {
      translation: prepareTranslationObj(translations, 'ru'),
    },
  },
  lng: config.defaultLanguage,
  fallbackLng: config.defaultLanguage,
  debug: false,

  interpolation: {
    escapeValue: false, // react сам делает escape
  },
});

export default i18n;
