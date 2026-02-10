import type { ThemeContextType } from './ThemeProvider';
import { createContext } from 'react';

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});
