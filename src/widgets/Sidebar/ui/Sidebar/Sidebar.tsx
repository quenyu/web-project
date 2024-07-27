import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { FaHome } from 'react-icons/fa';
import { TbAlertSquareRoundedFilled } from 'react-icons/tb';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const { t } = useTranslation();

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

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
				<AppLink
					className={styles.sidebar_item}
					theme={AppLinkTheme.PRIMARY}
					to={RoutePath.main}
				>
					<span className={styles.sidebar_item_icon}>
						<FaHome />
					</span>
					<span className={styles.link}>{t('Главная')}</span>
				</AppLink>
				<AppLink
					className={styles.sidebar_item}
					theme={AppLinkTheme.PRIMARY}
					to={RoutePath.about}
				>
					<span className={styles.sidebar_item_icon}>
						<TbAlertSquareRoundedFilled />
					</span>
					<span className={styles.link}>{t('О сайте')}</span>
				</AppLink>
			</div>
			<div className={styles.switchers}>
				<ThemeSwitcher className={styles.themeIcon} />
				<LangSwitcher className={styles.lang} short={collapsed} />
			</div>
		</div>
	);
};
