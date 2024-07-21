import { createContext } from 'react';

export enum Themes {
  DARK = 'app_dark_theme',
  LIGHT = 'app_light_theme'
}

export type ThemeContextProps = {
  theme?: Themes,
  setTheme?: (theme: Themes) => void,
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
