import { LuEye as IconView } from 'react-icons/lu';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
	Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  article: Article,
  view: ArticleView,
  className?: string,
}

export const ArticleListItem = memo(({ className, article, view }: ArticleListItemProps) => {
	const { t } = useTranslation('article');
	const [isHover, bindHover] = useHover();
	const navigate = useNavigate();

	const onOpenArticle = useCallback(() => {
		navigate(RoutePath.article_details + article.id);
	}, [article.id, navigate]);

	const types = <Text className={styles.articleTypes} title={article.type.join(', ')} />;
	const views = (
		<>
			<Text className={styles.articleViews} text={String(article.views)} />
			<IconView size={22} />
		</>
	);

	if (view === ArticleView.GRID1LARGE) {
		const textBlock = article.blocks.find(
			(block) => block.type === ArticleBlockType.TEXT,
		) as ArticleTextBlock;

		return (
			<div {...bindHover} className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
				<Card>
					<div className={styles.header}>
						<Avatar size={30} src={article.user.avatar} />
						<Text className={styles.username} text={article.user.username} />
						<Text className={styles.date} text={article.createdAt} />
					</div>
					<Text className={styles.title} title={article.title} />
					{types}
					<img className={styles.img} src={article.img} alt={article.title} />
					{textBlock && (
						<ArticleTextBlockComponent className={styles.textBlock} block={textBlock} />
					)}
					<div className={styles.footer}>
						<Button
							onClick={onOpenArticle}
							theme={ButtonTheme.OUTLINE}
						>
							{t('Читать далее...')}
						</Button>
						{views}
					</div>
				</Card>
			</div>
		);
	}

	return (
		<div {...bindHover} className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
			<Card onClick={onOpenArticle}>
				<div className={styles.articleImageWrapper}>
					<img className={styles.articleImg} src={article.img} alt="" />
					<Text className={styles.articleDate} text={article.createdAt} size={TextSize.M} />
				</div>
				<div className={styles.articleInfoWrapper}>
					{types}
					{views}
				</div>
				<Text className={styles.articleTitle} text={article.title} />
			</Card>
		</div>
	);
});
