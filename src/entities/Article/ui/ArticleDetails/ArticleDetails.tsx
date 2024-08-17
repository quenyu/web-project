import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
	Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { FaEye as IconEye, FaCalendarAlt as IconCalendar } from 'react-icons/fa';
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/articleDetails';
import { fetchArticlesByID } from '../../model/services/fetchArticlesByID/fetchArticlesByID';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

import styles from './ArticleDetails.module.scss';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
  className?: string,
  id: string,
}

const reducers: ReducersList = {
	articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
	const { t } = useTranslation('article');
	const dispatch = useAppDispatch();
	const isLoading = useSelector(getArticleDetailsIsLoading);
	const error = useSelector(getArticleDetailsError);
	const article = useSelector(getArticleDetailsData);

	const renderBlock = useCallback((block: ArticleBlock) => {
		switch (block.type) {
		case ArticleBlockType.CODE:
			return (
				<ArticleCodeBlockComponent
					key={block.id}
					className={styles.block}
					block={block}
				/>
			);
		case ArticleBlockType.IMAGE:
			return (
				<ArticleImageBlockComponent
					key={block.id}
					className={styles.block}
					block={block}
				/>
			);
		case ArticleBlockType.TEXT:
			return (
				<ArticleTextBlockComponent
					key={block.id}
					className={styles.block}
					block={block}
				/>
			);
		default:
			return null;
		}
	}, []);

	let content;

	if (isLoading) {
		content = (
			<>
				<Skeleton width={200} height={200} border="50%" />
				<Skeleton width={300} height={32} />
				<Skeleton width={600} height={24} border="50%" />
				<Skeleton width="100%" height={200} />
				<Skeleton width="100%" height={200} />
			</>
		);
	}

	if (error) {
		content = (
			<Text
				className={styles.ArticleDetailsError}
				theme={TextTheme.ERROR}
				title={t('Произошла ошибка при загрузки статьи')}
				align={TextAlign.CENTER}
			/>
		);
	}

	if (article) {
		content = (
			<>
				<div className={styles.avatarWrapper}>
					<Avatar
						src={article.img}
						size={200}
						className={styles.avatar}
					/>
				</div>
				<Text
					title={article.title}
					text={article.subtitle}
					size={TextSize.L}
				/>
				<div className={styles.articleInfo}>
					<IconEye className={styles.icon} size={20} />
					<Text
						text={String(article.views)}
					/>
				</div>
				<div className={styles.articleInfo}>
					<IconCalendar className={styles.icon} size={20} />
					<Text
						text={article.createdAt}
					/>
				</div>
				{article?.blocks.map(renderBlock)}
			</>
		);
	}

	useEffect(() => {
		if (Project !== 'storybook') {
			dispatch(fetchArticlesByID(id));
		}
	}, [dispatch, id]);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames(styles.ArticleDetails, {}, [className])}>
				{content}
			</div>
		</DynamicModuleLoader>
	);
});
