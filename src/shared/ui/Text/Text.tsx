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

interface TextProps {
  className?: string,
  title?: string,
  text?: string,
  theme?: TextTheme,
  align?: TextAlign,
}

export const Text = memo(({
	className,
	text,
	title,
	theme = TextTheme.PRIMARY,
	align = TextAlign.LEFT,
}: TextProps) => {
	const mods: Mods = { [styles[theme]]: true, [styles[align]]: true };

	return (
		<div className={classNames(styles.Text, mods, [className])}>
			{title && <h2 className={styles.title}>{title}</h2>}
			{text && <p className={styles.subtitle}>{text}</p>}
		</div>
	);
});
