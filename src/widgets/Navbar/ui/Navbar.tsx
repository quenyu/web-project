import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { getUserAuthData, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Navbar.module.scss';

type NavbarProps = {
  className?: string,
}

export const Navbar = memo(({ className }: NavbarProps) => {
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
			<header className={classNames(styles.Navbar, {}, [className])}>

				<div className={styles.links}>
					<Button
						theme={ButtonTheme.CLEAR}
						className={styles.link}
						onClick={onLogout}
					>
						{t('Выйти')}
					</Button>
				</div>
			</header>
		);
	}

	return (
		<header className={classNames(styles.Navbar, {}, [className])}>
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
		</header>
	);
});
