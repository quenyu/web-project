import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { getUserAuthData, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Navbar.module.scss';

type NavbarProps = {
  className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);
	const dispatch = useDispatch();
	const authData = useSelector(getUserAuthData);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	if (authData) {
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
						onClick={onLogout}
					>
						{t('Выйти')}
					</Button>
				</div>
			</div>
		);
	}

	return (
		<div className={classNames(styles.Navbar, {}, [className])}>
			<div className={styles.links}>
				<Button
					theme={ButtonTheme.CLEAR}
					className={styles.link}
					onClick={onShowModal}
				>
					{t('Войти')}
				</Button>
				{isAuthModal && (
					<LoginModal
						isOpen={isAuthModal}
						onClose={onCloseModal}
					/>
				)}
			</div>
		</div>
	);
};
