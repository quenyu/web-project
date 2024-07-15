import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
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
}

export const Button: FC<ButtonProps> = ({
	children,
	className,
	theme,
	square,
	size = ButtonSize.M,
	...otherProps
}) => {
	const mods: Record<string, boolean> = {
		[styles.square]: square,
		[styles[theme]]: true,
		[styles[size]]: true,
	};

	return (
		<button
			type="button"
			className={classNames(styles.Button, mods, [className])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
