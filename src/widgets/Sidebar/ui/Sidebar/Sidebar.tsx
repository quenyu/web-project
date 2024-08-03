import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItemList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	const itemsList = useMemo(() => SidebarItemList.map(({
		Icon, path, text, authOnly,
	}) => (
		<SidebarItem
			key={path}
			Icon={Icon}
			path={path}
			text={text}
			collapsed={collapsed}
			authOnly={authOnly}
		/>
	)), [collapsed]);

	return (
		<div
			data-testid="sidebar"
			className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
		>
			<Button
				data-testid="sidebar-button"
				onClick={onToggle}
				className={styles.collapsedBtn}
				size={ButtonSize.L}
				theme={ButtonTheme.CLEAR}
				square
			>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={styles.items}>
				{itemsList}
			</div>
			<div className={styles.switchers}>
				<ThemeSwitcher className={styles.themeIcon} />
				<LangSwitcher className={styles.lang} short={collapsed} />
			</div>
		</div>
	);
});
