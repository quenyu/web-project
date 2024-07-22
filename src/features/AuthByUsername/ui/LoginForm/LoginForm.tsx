import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Link } from 'react-router-dom';
import { Input } from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string,
}

export const LoginForm = ({
	className,
}: LoginFormProps) => {
	const { t } = useTranslation();

	return (
		<div className={classNames(styles.LoginFormContainer, {}, [className])}>
			<h1 className={styles.LoginForm_title}>{t('Вход')}</h1>
			<form className={styles.LoginForm}>
				<Input
					className={styles.LoginForm_input}
					type="text"
					id="username"
					name={t('Имя пользователя')}
					placeholder={t('Имя пользователя')}
					required
				/>
				<Input
					className={styles.LoginForm_input}
					type="password"
					id="password"
					name={t('Имя пользователя')}
					placeholder={t('Пароль')}
					required
				/>
				<Button
					type="submit"
					className={styles.LoginForm_btn}
				>
					{t('Войти')}
				</Button>
			</form>
			<p className={styles.LoginForm_subtitle}>
				{t('Нет аккаунта?')}
				{' '}
				<Link to="/">{t('Зарегестрироваться')}</Link>
			</p>
		</div>
	);
};
