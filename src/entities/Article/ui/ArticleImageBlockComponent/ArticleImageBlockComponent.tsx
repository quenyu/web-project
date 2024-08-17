import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import {
	Text, TextAlign, TextSize, TextStyleVariant,
} from 'shared/ui/Text/Text';
import styles from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string,
  block?: ArticleImageBlock,
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => {
	const { t } = useTranslation('article');

	return (
		<div className={classNames(styles.ArticleImageBlockComponent, {}, [className])}>
			{block?.src && (
				// eslint-disable-next-line i18next/no-literal-string
				<img src={block?.src} className={styles.blockImg} alt="img" />
			)}
			{block?.title && (
				<Text
					text={block?.title}
					align={TextAlign.CENTER}
					textStyle={TextStyleVariant.TEXT}
				/>
			)}
		</div>
	);
});
