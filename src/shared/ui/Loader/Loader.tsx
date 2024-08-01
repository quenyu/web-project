import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Loader.module.scss';

export const Loader = () => (
	<div className={styles.LoaderWrapper}>
		<span className={classNames(styles.Loader, {}, [])} />
	</div>
);
