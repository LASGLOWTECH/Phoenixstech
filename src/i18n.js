// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation files
const resources = {
  en: {
    translation: {
      "Home": "Home",
      "About Us": "About Us",
      "Outsourcing Services": "Outsourcing Services",
      "Inbound & Outbound Call Center": "Inbound & Outbound Call Center",
      "Live Chat & Email Support": "Live Chat & Email Support",
      "Technical Support & IT Helpdesk": "Technical Support & IT Helpdesk",
      "Multilingual Support": "Multilingual Support",
      "Industries": "Industries",
      "E-commerce & Retail": "E-commerce & Retail",
      "Healthcare & Insurance": "Healthcare & Insurance",
      "Finance & Banking": "Finance & Banking",
      "Tourism": "Tourism",
      "Automotive": "Automotive",
      "Insurance": "Insurance",
      "Blogs": "Blogs",
      "Careers": "Careers",
      "Contact": "Contact",
      "Contact Us": "Contact Us",
    },
  },
  fr: {
    translation: {
      "Home": "Accueil",
      "About Us": "À propos",
      "Outsourcing Services": "Services externalisés",
      "Inbound & Outbound Call Center": "Centre d'appels entrants et sortants",
      "Live Chat & Email Support": "Assistance par chat et e-mail",
      "Technical Support & IT Helpdesk": "Support technique et helpdesk IT",
      "Multilingual Support": "Support multilingue",
      "Industries": "Industries",
      "E-commerce & Retail": "Commerce électronique",
      "Healthcare & Insurance": "Santé & Assurance",
      "Finance & Banking": "Finance & Banque",
      "Tourism": "Tourisme",
      "Automotive": "Automobile",
      "Insurance": "Assurance",
      "Blogs": "Blogs",
      "Careers": "Carrières",
      "Contact": "Contact",
      "Contact Us": "Contactez-nous",
    },
  },
  pl: {
    translation: {
      "Home": "Strona główna",
      "About Us": "O nas",
      "Outsourcing Services": "Usługi outsourcingowe",
      "Inbound & Outbound Call Center": "Infolinia przychodząca i wychodząca",
      "Live Chat & Email Support": "Czat na żywo i wsparcie e-mailowe",
      "Technical Support & IT Helpdesk": "Wsparcie techniczne i IT",
      "Multilingual Support": "Wsparcie wielojęzyczne",
      "Industries": "Branże",
      "E-commerce & Retail": "E-commerce i handel detaliczny",
      "Healthcare & Insurance": "Opieka zdrowotna i ubezpieczenia",
      "Finance & Banking": "Finanse i bankowość",
      "Tourism": "Turystyka",
      "Automotive": "Motoryzacja",
      "Insurance": "Ubezpieczenie",
      "Blogs": "Blogi",
      "Careers": "Kariera",
      "Contact": "Kontakt",
      "Contact Us": "Skontaktuj się z nami",
    },
  },
};

i18n
  .use(LanguageDetector) // detects browser language
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
