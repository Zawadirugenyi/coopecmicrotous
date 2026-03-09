// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define resources for the supported languages
const resources = {
   en: {
    translation: {
      welcome: "Welcome",
      login: "Login",
      home: "Home"
    }
  },
  fr: {
    translation: {
      welcome: "Bienvenue",
      login: "Connexion",
      home: "Accueil"
    }
  },
  sw: {
    translation: {
      welcome: "Karibu",
      login: "Ingia",
      home: "Nyumbani"
    }
  }

};

i18n

  .use(initReactI18next)  // Connects i18n with React
  .init({
    resources,
    lng: 'en',  // Default language
    fallbackLng: 'en',  // Fallback language if key is missing
    interpolation: {
      escapeValue: false,  // React already handles escaping
    },
    react: {
      useSuspense: false,  // Disabling Suspense for immediate translations
    },
  });

export default i18n;

