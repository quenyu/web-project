import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import styles from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    width?: number;
    height?: number;
}

export const Icon = memo(({
	className, Svg, height, width,
}: IconProps) => (
	<Svg
		className={classNames(styles.Icon, {}, [className])}
		width={width}
		height={height}
	/>
));
