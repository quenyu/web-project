import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import styles from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  CENTER = 'center',
  LEFT = 'left',
  RIGHT = 'right'
}

export enum TextStyleVariant {
	TEXT = 'textAdditional',
	TITLE = 'titleAdditional',
}

interface TextProps {
  className?: string,
  title?: string,
  text?: string,
  theme?: TextTheme,
  align?: TextAlign,
  textStyle?: TextStyleVariant,
}

export const Text = memo(({
	className,
	text,
	title,
	textStyle = TextStyleVariant.TEXT,
	theme = TextTheme.PRIMARY,
	align = TextAlign.LEFT,
}: TextProps) => {
	const mods: Mods = { [styles[theme]]: true, [styles[align]]: true };

	const modsText: Mods = { [styles[textStyle]]: true };
	const modsTitle: Mods = { [styles[textStyle]]: true };

	return (
		<div className={classNames(styles.Text, mods, [className])}>
			{title && <h2 className={classNames(styles.title, modsTitle)}>{title}</h2>}
			{text && <p className={classNames(styles.subtitle, modsText)}>{text}</p>}
		</div>
	);
});
