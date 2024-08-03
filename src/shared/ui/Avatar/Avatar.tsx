import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, memo, useMemo } from 'react';
import styles from './Avatar.module.scss';

interface AvatarProps {
  className?: string,
  src?: string,
  size?: number,
  alt?: string,
}

export const Avatar = memo(({
	className, src, size, alt,
}: AvatarProps) => {
	const imgStyle = useMemo<CSSProperties>(() => ({
		width: size,
		height: size,
	}), [size]);

	return (
		<img
			src={src}
			style={imgStyle}
			className={classNames(styles.Avatar, {}, [className])}
			alt={alt}
		/>
	);
});
