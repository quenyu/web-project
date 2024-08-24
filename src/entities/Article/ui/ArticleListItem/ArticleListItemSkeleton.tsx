/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
	ArticleView,
} from '../../model/types/article';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  view: ArticleView,
  className?: string,
}

export const ArticleListItemSkeleton = memo(({ className, view }: ArticleListItemSkeletonProps) => {
	if (view === ArticleView.GRID1LARGE) {
		return (
			<div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
				<Card>
					<div className={styles.header}>
						<Skeleton border="50%" height={30} width={30} />
						<Skeleton className={styles.username} width={150} height={16} />
						<Skeleton className={styles.date} width={150} height={16} />
					</div>
					<Skeleton className={styles.title} width={250} height={24} />
					<Skeleton className={styles.img} height={200} />
					<div className={styles.footer}>
						<Skeleton className={styles.img} height={36} width={200} />
					</div>
				</Card>
			</div>
		);
	}

	return (
		<div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
			<Card>
				<div className={styles.articleImageWrapper}>
					<Skeleton className={styles.articleImg} width={200} height={200} border="12px" />
				</div>
				<div className={styles.articleInfoWrapper}>
					<Skeleton className={styles.articleImg} width={130} height={16} />
				</div>
				<Skeleton className={styles.articleTitle} width={150} height={16} />
			</Card>
		</div>
	);
});
