import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import styles from './Navbar.module.scss';

type NavbarProps = {
	className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();

	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev);
	}, []);

	return (
		<div className={classNames(styles.Navbar, {}, [className])}>
			<div className={styles.links}>
				<AppLink theme={AppLinkTheme.PRIMARY} to={RoutePath.main}>
					{t('Главная')}
				</AppLink>
				<AppLink theme={AppLinkTheme.PRIMARY} to={RoutePath.about}>
					{t('О сайте')}
				</AppLink>
				<Button
					theme={ButtonTheme.OUTLINE}
					className={styles.link}
					onClick={onToggleModal}
				>
					{t('Войти')}
				</Button>
				<Modal
					isOpen={isAuthModal}
					onClose={onToggleModal}
				>
					/
				</Modal>
			</div>
		</div>
	);
};
