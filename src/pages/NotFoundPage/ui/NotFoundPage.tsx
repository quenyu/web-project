import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'shared/ui/Page/Page';
import styles from './NotFoundPage.module.scss';

export const NotFoundPage = memo(() => {
	const { t } = useTranslation();

	return (
		<Page className={classNames(styles.NotFoundPage, {}, [])}>
			{t('Страница не найдена')}
		</Page>
	);
});
