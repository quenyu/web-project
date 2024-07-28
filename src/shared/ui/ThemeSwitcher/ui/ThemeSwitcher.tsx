import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import styles from './ThemeSwitcher.module.scss';

type ThemeSwitcherProps = {
	className?: string,
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
	const { toggleTheme } = useTheme();

	return (
		<input
			className={classNames(styles.ThemeToggle, {}, [className])}
			onClick={toggleTheme}
			type="checkbox"
			defaultChecked
		/>
	);
});
