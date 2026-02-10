import type { ThemeContextType } from './themeProvider'
import { createContext } from 'react';

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});
