import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import styles from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/types/sidebar';

interface SidebarItemProps extends SidebarItemType {
  collapsed: boolean,
}

export const SidebarItem = memo(({
	Icon, path, text, collapsed, authOnly,
}: SidebarItemProps) => {
	const { t } = useTranslation();

	const isAuth = useSelector(getUserAuthData);

	if (authOnly && !isAuth) {
		return null;
	}

	return (
		<AppLink
			className={classNames(styles.sidebar_item, { [styles.collapsed]: collapsed })}
			theme={AppLinkTheme.PRIMARY}
			to={path}
		>
			<span className={styles.sidebar_icon_wrapper}>
				<Icon className={styles.sidebar_item_icon} />
			</span>
			<span className={styles.link}>{t(text)}</span>
		</AppLink>
	);
});
