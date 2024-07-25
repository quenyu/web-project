import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Link } from 'react-router-dom';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUsername } from '../../models/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../models/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../models/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../models/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginActions, loginReducer } from '../../models/slice/loginSlice';
import { loginByUsername } from '../../models/services/loginByUsername/loginByUsername';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string,
}

const initialReducers: ReducersList = {
	login: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const username = useSelector(getLoginUsername);
	const password = useSelector(getLoginPassword);
	const isLoading = useSelector(getLoginIsLoading);
	const error = useSelector(getLoginError);

	const onChangeUsername = useCallback((value: string) => {
		dispatch(loginActions.setUsername(value));
	}, [dispatch]);

	const onChangePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value));
	}, [dispatch]);

	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({ username, password }));
	}, [dispatch, password, username]);

	return (
		<DynamicModuleLoader reducers={initialReducers}>
			<div className={classNames(styles.LoginFormContainer, {}, [className])}>
				<h1 className={styles.LoginForm_title}>{t('Вход')}</h1>
				{error && (
					<Text
						className={styles.LoginForm_errorTitle}
						title={t('Неверный логин или пароль')}
						theme={TextTheme.ERROR}
					/>
				)}
				<form className={styles.LoginForm}>
					<Input
						className={styles.LoginForm_input}
						type="text"
						id="username"
						name={t('Имя пользователя')}
						placeholder={t('Имя пользователя')}
						value={username}
						onChange={onChangeUsername}
						required
					/>
					<Input
						className={styles.LoginForm_input}
						type="password"
						id="password"
						name={t('Имя пользователя')}
						placeholder={t('Пароль')}
						value={password}
						onChange={onChangePassword}
						required
					/>
					<Button
						type="submit"
						className={styles.LoginForm_btn}
						disabled={isLoading}
						onClick={onLoginClick}
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
		</DynamicModuleLoader>
	);
});

export default LoginForm;
