import { useState, useEffect } from 'react';

function useTheme() {
  const [theme, setTheme] = useState(() => {
    
    // Controlliamo che l'ambiente 'window' esista (per ambienti SSR)
    if (typeof window === 'undefined') {
      return 'light'; // Default sicuro per il Server Side Rendering
    }
    
    // 1. Priorità: Preferenza salvata in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    
    // 2. Fallback: Preferenza del sistema operativo
    // Usa 'matchMedia' per controllare se l'utente preferisce il tema scuro
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    // 3. Ultimo Fallback: Tema chiaro
    return 'light'; 
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      
      // La logica di applicazione della classe 'dark' rimane invariata
      if (theme === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light'); // Rimuovi esplicitamente 'light'
      } else {
        root.classList.remove('dark');
        root.classList.add('light'); // Aggiungi esplicitamente 'light' se necessario per gli stili
      }
      
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return [theme, toggleTheme];
}

export default useTheme;