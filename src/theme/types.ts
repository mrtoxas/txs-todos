import React from 'react';

export enum Mode {
  Light = 'Light',
  Dark = 'Dark',
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export interface ThemeContext {
  changeMode: (mode: Mode) => void;
  mode: Mode;
}
