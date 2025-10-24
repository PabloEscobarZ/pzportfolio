import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // Carica i dati di traduzione dal server/public
  .use(Backend)
  // Rileva la lingua dell'utente (cookie, localStorage, browser)
  .use(LanguageDetector)
  // Passa l'istanza di i18n a react-i18next.
  .use(initReactI18next)
  // Inizializza i18next
  .init({
    // Lingue supportate
    debug: true,
    supportedLngs: ['en', 'it'],
    
    // Lingua predefinita se non viene rilevata alcuna preferenza
    fallbackLng: 'en',
    
    // Namespace predefinito per i file di traduzione
    defaultNS: 'translation', 
    
    // Configurazione del backend per il caricamento
    backend: {
      // Dove trovare i file di traduzione (ad es. /public/locales/en/translation.json)
      loadPath: '/pzportfolio/locales/{{lng}}/{{ns}}.json',
    },
    
    // Impostazioni per il rilevamento della lingua
    detection: {
      // Ordine in cui rilevare la lingua
      order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
    },

    // Importante per React: evita di sanitizzare
    interpolation: {
      escapeValue: false, 
    },
    
    // Opzione per il debug in console
    // debug: true,
  });

export default i18n;
