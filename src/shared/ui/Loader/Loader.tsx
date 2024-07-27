// import { classNames } from 'shared/lib/classNames/classNames';
// import styles from './Loader.module.scss';
import kyubei from 'shared/assets/gif/kyubei.gif';

export const Loader = () => (
	// <span className={classNames(styles.Loader, {}, [])} />
	// eslint-disable-next-line i18next/no-literal-string
	<img src={kyubei} alt="kyubei" />
);
