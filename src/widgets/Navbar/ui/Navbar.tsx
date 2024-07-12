import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

type NavbarProps = {
  className?: string,
}

export const Navbar = ({ className }: NavbarProps) => (
	<div className={classNames(styles.Navbar, {}, [className])}>
		<div className={styles.links}>
			<AppLink theme={AppLinkTheme.PRIMARY} to="/about">
				О сайте
			</AppLink>
			<AppLink theme={AppLinkTheme.PRIMARY} to="/">
				Главная
			</AppLink>
		</div>
	</div>
);
