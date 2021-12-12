import { createContext, useCallback, useContext, useEffect, useMemo } from 'react';

import useLocalStorageState from '@/hooks/useLocalStorageState';

const initialValue = 'dark';

interface ThemeContextValue {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const ThemeContext = createContext({
  theme: initialValue,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
} as ThemeContextValue);

const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useLocalStorageState<'dark' | 'light'>('theme', initialValue);

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
