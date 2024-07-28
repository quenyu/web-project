import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import styles from './PageError.module.scss';

export const PageError = memo(() => {
	const { t } = useTranslation();

	const reloadPage = () => {
		// eslint-disable-next-line no-restricted-globals
		location.reload();
	};

	return (
		<div className={classNames(styles.PageError, {}, [])}>
			<h1 className={styles.PageError__title}>
				{t('Произошла непредвиденная ошибка')}
			</h1>
			<Button
				onClick={reloadPage}
				className={styles.PageError__button}
			>
				{t('Обновить страницу')}
			</Button>
		</div>
	);
});
