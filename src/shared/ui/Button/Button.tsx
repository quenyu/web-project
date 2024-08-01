import {
	ButtonHTMLAttributes, memo, ReactNode,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export const enum ButtonTheme {
	CLEAR = 'clear',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted'
}

export const enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string,
	theme?: ButtonTheme,
	square?: boolean,
	size?: ButtonSize,
  children?: ReactNode,
}

export const Button = memo(({
	children,
	className,
	theme = ButtonTheme.CLEAR,
	square,
	disabled,
	size = ButtonSize.M,
	...otherProps
}: ButtonProps) => {
	const mods: Mods = {
		[styles.square]: square,
		[styles[theme]]: true,
		[styles[size]]: true,
		[styles.disabled]: disabled,
	};

	return (
		<button
			type="button"
			className={classNames(styles.Button, mods, [className])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	);
});
