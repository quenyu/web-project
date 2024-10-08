import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string,
  children: ReactNode,
}

export const Card = memo(({ className, children, ...otherProps }: CardProps) => (
	<div
		className={classNames(styles.Card, {}, [className])}
		{...otherProps}
	>
		{children}
	</div>
));
