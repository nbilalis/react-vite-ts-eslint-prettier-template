import type { ReactNode } from 'react';
import { createContext, useCallback, useContext, useEffect, useMemo } from 'react';

import useLocalStorageState from '@/hooks/useLocalStorageState';

type ThemeOption = 'dark' | 'light';

const initialValue: ThemeOption = 'dark';

interface ThemeContextValue {
  theme: ThemeOption;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: initialValue,
  toggleTheme: () => null,
});

const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useLocalStorageState('theme', initialValue);

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export { useTheme };

export default ThemeProvider;
