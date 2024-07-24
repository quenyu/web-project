import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string,
  title?: string,
  text?: string,
  theme?: TextTheme;
}

export const Text = ({
	className,
	text,
	title,
	theme = TextTheme.PRIMARY,
}: TextProps) => (
	<div className={classNames(styles.Text, { [styles[theme]]: true }, [className])}>
		{title && <h2 className={styles.title}>{title}</h2>}
		{text && <p className={styles.subtitle}>{text}</p>}
	</div>
);
