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
	);
};
