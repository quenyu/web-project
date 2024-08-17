import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string,
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
	const { t } = useTranslation('article');
	const { id } = useParams();

	if (!id) {
		return (
			<div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
				{t('Статья не найдена')}
			</div>
		);
	}

	return (
		<div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
			<ArticleDetails id={id} />
		</div>
	);
});

export default ArticleDetailsPage;
