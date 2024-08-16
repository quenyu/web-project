import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string,
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
	const { t } = useTranslation('article');

	return (
		<div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
			{t('Страница статей')}
		</div>
	);
});

export default ArticleDetailsPage;
