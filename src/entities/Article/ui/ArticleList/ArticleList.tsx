/* eslint-disable react/no-array-index-key */
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import styles from './ArticleList.module.scss';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  articles: Article[],
  className?: string,
  isLoading?: boolean,
  view?: ArticleView,
}

const getSkeletons = (view: ArticleView) => (new Array(view === ArticleView.GRID4SMALL ? 12 : 3).fill(null).map((_, index) => (
	<ArticleListItemSkeleton key={index} view={view} />
)));

export const ArticleList = memo(({
	className,
	articles,
	isLoading,
	view = ArticleView.GRID4SMALL,
}: ArticleListProps) => {
	if (isLoading) {
		return (
			<div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
				{getSkeletons(view)}
			</div>
		);
	}

	const renderArticle = (article: Article) => <ArticleListItem key={article.id} article={article} view={view} />;

	return (
		<div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
			{articles.length > 0
				? articles.map(renderArticle)
				: null}
		</div>
	);
});
