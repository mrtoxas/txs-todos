import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './themes';
import type { ThemeContext, ThemeProviderProps } from './types';
import { Mode } from './types';

const AppThemeContext = createContext<ThemeContext>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeMode: () => {},
  mode: Mode.Light,
});

export function AppThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(lightTheme);

  const [mode, setMode] = useState<Mode>(() => {
    const modeInStorage = localStorage.getItem('Theme');
    if (modeInStorage) {
      setTheme(modeInStorage === Mode.Light ? lightTheme : darkTheme);
      return modeInStorage === Mode.Light ? Mode.Light : Mode.Dark;
    }

    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(systemTheme ? darkTheme : lightTheme);
    return systemTheme ? Mode.Dark : Mode.Light;
  });

  const changeMode = (mode: Mode) => {
    setTheme(mode === Mode.Light ? lightTheme : darkTheme);
    setMode(mode);
    localStorage.setItem('Theme', mode);
  };

  return (
    <AppThemeContext.Provider value={{ mode, changeMode }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(AppThemeContext);
