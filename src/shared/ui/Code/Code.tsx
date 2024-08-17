import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { FaCopy } from 'react-icons/fa';
import { Button, ButtonTheme } from '../Button/Button';
import styles from './Code.module.scss';

interface AvatarProps {
  className?: string,
  code: string,
}

export const Code = memo(({
	className,
	code,
}: AvatarProps) => {
	const onCopy = useCallback(() => navigator.clipboard.writeText(code), [code]);

	return (
		<pre className={classNames(styles.Code, {}, [className])}>
			<code>
				<Button onClick={onCopy} className={styles.copyBtn} theme={ButtonTheme.CLEAR}>
					<FaCopy className={styles.copyIcon} size={16} />
				</Button>
				{code}
			</code>
		</pre>
	);
});
