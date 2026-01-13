import { useEffect, useState, type PropsWithChildren } from 'react';
import { ThemeContext, type Theme } from './ThemeContext';

const getInitialTheme = () => {
  const stored = localStorage.getItem('theme');
  return stored === 'dark' ? 'dark' : 'light';
};

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};
