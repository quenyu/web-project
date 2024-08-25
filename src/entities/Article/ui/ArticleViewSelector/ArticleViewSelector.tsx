// import { RxTextAlignJustify as IconList } from 'react-icons/rx';
// import { FaBorderAll as IconTile } from 'react-icons/fa6';
// import { MdBorderAll as IconTile } from 'react-icons/md';
// import { HiOutlineViewList as IconList } from 'react-icons/hi';
import IconList from 'shared/assets/icons/list-icon.svg';
import IconTiled from 'shared/assets/icons/tiled-icon.svg';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ArticleView } from '../../model/types/article';
import styles from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string,
  onViewClick?: (view: ArticleView) => void,
  view?: ArticleView,
}

const viewTypes = [
	{
		view: ArticleView.GRID4SMALL,
		icon: IconTiled,
	},
	{
		view: ArticleView.GRID1LARGE,
		icon: IconList,
	},
];

export const ArticleViewSelector = memo(({ className, view, onViewClick }: ArticleViewSelectorProps) => {
	const onClick = (newView: ArticleView) => () => {
		onViewClick?.(newView);
	};

	return (
		<div className={classNames('', {}, [className])}>
			{viewTypes.map((viewType) => (
				<Button
					key={viewType.view}
					onClick={onClick(viewType.view)}
					theme={ButtonTheme.CLEAR}
					className={styles.icon}
				>
					<Icon
						className={classNames('', { [styles.Selected]: viewType.view === view })}
						Svg={viewType.icon}
						width={36}
						height={36}
					/>
				</Button>
			))}
		</div>
	);
});
