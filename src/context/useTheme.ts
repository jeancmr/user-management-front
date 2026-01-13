import { use } from 'react';
import { ThemeContext } from './ThemeContext';

export const useTheme = () => {
  const ctx = use(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
};
