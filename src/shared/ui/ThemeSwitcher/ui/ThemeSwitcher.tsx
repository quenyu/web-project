import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ThemeSwitcher.module.scss';

type ThemeSwitcherProps = {
	className?: string,
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { toggleTheme } = useTheme();

	return (
		<input
			className={classNames(styles.ThemeToggle, {}, [className])}
			onClick={toggleTheme}
			type="checkbox"
			defaultChecked
		/>
		// <Button
		// 	className={classNames('', {}, [className])}
		// 	onClick={toggleTheme}
		// 	theme={ButtonTheme.CLEAR}
		// >
		// {/* </Button> */}
		// {/* {theme === Themes.DARK ? <DarkThemeIcon className={styles.darkIcon} width={30} height={30} /> : <LightThemeIcon width={30} height={30} />} */}
	);
};
