// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Centralized translation resource object

import en from "./locales/en";
import fr from "./locales/fr";
import pl from "./locales/pl";

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  pl: { translation: pl },
};

i18n
  .use(LanguageDetector) // auto detects user language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en", // fallback language if detection fails
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
