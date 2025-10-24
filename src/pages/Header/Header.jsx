import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
  FaFlag,
  FaSun,
  FaMoon
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "@/components/LanguageSwitcher";
import useTheme from "@/assets/config/useTheme";

export default function Header({ isOnePage }) {
  // multilangual setup
  const [theme, toggleTheme] = useTheme();
  const { t, i18n } = useTranslation();

  const location = useLocation();
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname.substring(1) || "home";
    return path;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Funzione per gestire lo scroll manuale (per la modalità One-Page)
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Scorrimento fluido
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { id: "home", icon: FaHome, text: t('nav.home'), path: "/", anchor:"#home" },
    { id: "skills", icon: FaCode, text: t('nav.skills'), path: "/skills", anchor:"#skills" },
    // { id: "experience", icon: FaBriefcase, text: t('nav.experience'), path: "/experience", anchor:"#experience" },
    { id: "education", icon: FaGraduationCap, text: t('nav.education'), path: "/education", anchor:"#education" },
    { id: "projects", icon: FaLaptopCode, text: t('nav.projects'), path: "/projects", anchor:"#projects" },
    { id: "contact", icon: FaEnvelope, text: t('nav.contact'), path: "/contact", anchor:"#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-gray-900/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
      <div className="md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">
        <div className="p-[2px] md:rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-gradient-x">
          <nav className="bg-gray-900/90 backdrop-blur-md md:rounded-full px-4 md:px-6 py-2.5">
            {/* Mobile Menu Button */}

                  {/* ... (i tuoi link navLinks.map) ... */}
                  
            <div className="flex justify-between items-center md:hidden px-2">

                  {/* Bottone per il cambio tema */}
                  <button 
                    onClick={toggleTheme} 
                    className="px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:bg-white/10 text-gray-300 hover:text-white"
                    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
                  >
                    {theme === 'light' ? <FaSun className="text-base" /> : <FaMoon className="text-base text-yellow-400" />}
                    <span className="inline capitalize">{theme === 'light' ? '' : ''}</span>
                  </button>
              <Link to="/" className="text-white font-bold"></Link>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                <FaBars />
              </button>
            </div>

            {/* Navigation Links */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1 lg:gap-2 py-4 md:py-0">
                {/* Bottone per il cambio tema */}
                  <button 
                    onClick={toggleTheme} 
                    className="px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:bg-white/10 text-gray-300 hover:text-white"
                    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
                  >
                    {theme === 'light' ? <FaSun className="text-base" /> : <FaMoon className="text-base text-yellow-400" />}
                    <span className="inline capitalize">{theme === 'light' ? '' : ''}</span>
                  </button>
                {navLinks.map(({ id, icon: Icon, text, path, anchor }) => (
                  <Link
                    key={id}
                    to={isOnePage ? anchor : path}
                    onClick={() => {
                      setActiveLink(id);
                      setIsMenuOpen(false);
                      // ⭐️ SE SIAMO IN MODALITÀ ONE-PAGE, SCORRI MANUALMENTE
                      if (isOnePage) {
                        // Aggiungiamo un piccolo ritardo per permettere al browser di aggiornare l'hash, se necessario
                        setTimeout(() => handleScroll(id), 50); 
                      }
                    }}
                    className={`px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium
                      transition-all duration-300 flex items-center gap-2
                      hover:bg-white/10 
                      ${
                        activeLink === id
                          ? "bg-white/15 text-white"
                          : "text-gray-300 hover:text-white"
                      }
                    `}
                  >
                    <Icon
                      className={`text-base ${
                        activeLink === id ? "scale-110" : ""
                      }`}
                    />
                    <span className="inline">{text}</span>
                  </Link>
                ))}
                  {/* INSERIMENTO DELLO SWITCH LINGUA */}
                  <LanguageSwitcher
                    activeLink={activeLink}
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                    setActiveLink={setActiveLink}
                  />
                </div>
              </div>
            
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </header>
  );
}
