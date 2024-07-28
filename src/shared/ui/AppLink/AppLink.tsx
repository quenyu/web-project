import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string,
  theme?: string,
  children?: ReactNode,
}

export const AppLink = memo(({
	children,
	className,
	to,
	theme = AppLinkTheme.PRIMARY,
	...otherProps
}: AppLinkProps) => (
	<Link
		className={classNames(styles.AppLink, {}, [className, styles[theme]])}
		to={to}
		{...otherProps}
	>
		{children}
	</Link>
));
