import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from 'app/providers/ThemeProvider/lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.DARK;

const ThemeProvider: FC = ({ children }) => {
	const [theme, setTheme] = useState<Themes>(defaultTheme);

	const defaultProps = useMemo(() => ({
		theme,
		setTheme,
	}), [theme]);

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
