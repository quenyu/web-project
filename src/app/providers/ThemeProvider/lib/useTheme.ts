import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from './ThemeContext';

export type UseThemeResult = {
	theme: Themes,
	toggleTheme: () => void,
}

export const useTheme = (): UseThemeResult => {
	const { theme, setTheme } = useContext(ThemeContext);

	document.body.className = theme || '';

	const toggleTheme = () => {
		let newTheme;
		switch (theme) {
		case Themes.DARK:
			newTheme = Themes.LIGHT;
			break;
		case Themes.LIGHT:
			newTheme = Themes.DARK;
			break;
		default:
			newTheme = Themes.DARK;
		}
		setTheme?.(newTheme);
		document.body.className = newTheme;
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};

	return {
		theme: theme || Themes.DARK,
		toggleTheme,
	};
};
