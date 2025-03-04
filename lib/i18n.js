// 'use client';

// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpBackend from 'i18next-http-backend';


// const resources = {
//     en: { translation: { welcome: 'Welcome to our website', language: 'Language' } },
//     ar: { translation: { welcome: 'مرحبًا بك في موقعنا', language: 'اللغة' } },
//   };





// i18n
//   .use(initReactI18next)
//   .init({
//     resources, 
//     lng: 'en', 
//     fallbackLng: 'en',
//     interpolation: { escapeValue: false },
//     debug: true, 
//   });

// export default i18n;


'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Load translations from public/locales
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Default language
    supportedLngs: ['en', 'ar'], // Available languages
    interpolation: { escapeValue: false }, // Allow HTML in translations
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie', 'localStorage'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translate.json', // Load translation files
    },
    debug: true, // Enable debugging in the console
  });

export default i18n;

