import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';


const language = ['en'];
const lng = localStorage.getItem('i18nextLng') || undefined;
// noinspection JSIgnoredPromiseFromCall
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    [lng || 'lng']: lng,
    fallbackLng: 'en',
    debug: true,
    whitelist: language,
    ns: 'Language',
    defaultNS: 'Language',
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {
    localStorage.setItem('i18nextLng', i18n.language);
  });

export default i18n;
