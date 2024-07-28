import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps extends SidebarItemType {
  collapsed: boolean,
}

export const SidebarItem = memo(({
	Icon, path, text, collapsed,
}: SidebarItemProps) => {
	const { t } = useTranslation();

	return (
		<AppLink
			className={classNames(styles.sidebar_item, { [styles.collapsed]: collapsed })}
			theme={AppLinkTheme.PRIMARY}
			to={path}
		>
			<span className={styles.sidebar_item_icon}>
				<Icon />
			</span>
			<span className={styles.link}>{t(text)}</span>
		</AppLink>
	);
});
