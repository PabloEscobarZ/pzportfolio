import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFlag } from 'react-icons/fa'; // Icona che hai usato

const languageDisplayMap = {
  'it': 'IT',
  'en': 'EN',
  // Aggiungi qui altre lingue se necessario
};

const LanguageSwitcher = ({ activeLink, isMenuOpen, setIsMenuOpen, setActiveLink }) => {
  const { i18n } = useTranslation();

  const toggleLanguage = (event) => {
    // Impedisci l'azione di navigazione del link se fosse un <a>
    event.preventDefault(); 
    
    // Logica per cambiare lingua tra 'en' e 'it'
    const newLang = i18n.language === 'en' ? 'it' : 'en';
    i18n.changeLanguage(newLang);
    
    // Chiudi il menu dopo il cambio di lingua, se necessario
    if (isMenuOpen) {
        setIsMenuOpen(false);
    }
    // NON toccare setActiveLink qui, lo switch non è un link di pagina
  };

const currentLangDisplay = languageDisplayMap[i18n.language] || i18n.language.toUpperCase();  
  const nextLangCode = i18n.language === 'en' ? 'it' : 'en';
  const nextLangDisplay = languageDisplayMap[nextLangCode] || nextLangCode.toUpperCase();
  
  return (
    // Usa un pulsante al posto di Link, perché non naviga ad un path
    <button
      onClick={toggleLanguage}
      className={`px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium
        transition-all duration-300 flex items-center gap-2
        hover:bg-white/10 text-gray-700 dark:text-gray-300 hover:text-white
      `}
      aria-label={`Switch language to ${nextLangDisplay === 'en' ? 'it' : 'en'}`}
    >
      <FaFlag className="text-base" />
      <span className="inline">{currentLangDisplay}</span>
    </button>
  );
};

export default LanguageSwitcher;