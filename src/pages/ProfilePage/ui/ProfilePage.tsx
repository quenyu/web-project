import {
	fetchProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, getProfileValidateErrors, profileActions, ProfileCard, profileReducer,
} from 'entities/Profile';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'shared/ui/Page/Page';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import styles from './ProfilePage.module.scss';

const reducers: ReducersList = {
	profile: profileReducer,
};

interface ProfilePageProps {
  className?: string,
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
	const { t } = useTranslation('profile');
	const dispatch = useAppDispatch();
	const form = useSelector(getProfileForm);
	const error = useSelector(getProfileError);
	const isLoading = useSelector(getProfileIsLoading);
	const readonly = useSelector(getProfileReadonly);
	const validateErrors = useSelector(getProfileValidateErrors);
	const { id } = useParams();

	const validateProfileError = {
		[ValidateProfileError.SERVER_ERROR]: t('Произошла ошибка сервера. Пожалуйста, попробуйте позже'),
		[ValidateProfileError.NO_DATA]: t('Отсутствуют данные. Проверьте введённую информацию'),
		[ValidateProfileError.INCORRECT_AGE]: t('Указан некорректный возраст. Пожалуйста, введите действительный возраст'),
		[ValidateProfileError.INCORRECT_COUNTRY]: t('Указана некорректная страна. Пожалуйста, проверьте правильность данных'),
		[ValidateProfileError.INCORRECT_USERNAME]: t('Некорректное имя пользователя или оно уже занято. Пожалуйста, выберите другое'),
		[ValidateProfileError.INCORRECT_USER_DATA]: t('Некорректные данные пользователя. Пожалуйста, проверьте введённую информацию'),
	};

	useInitialEffect(() => {
		if (id) {
			dispatch(fetchProfileData(String(id)));
		}
	});

	const onChangeFirstname = useCallback((value: string) => {
		dispatch(profileActions.updateProfile({ firstName: value }));
	}, [dispatch]);

	const onChangeLastname = useCallback((value: string) => {
		dispatch(profileActions.updateProfile({ lastName: value }));
	}, [dispatch]);

	const onChangeUsername = useCallback((value: string) => {
		dispatch(profileActions.updateProfile({ username: value }));
	}, [dispatch]);

	const onChangeAge = useCallback((value: string) => {
		dispatch(profileActions.updateProfile({ age: Number(value) }));
	}, [dispatch]);

	const onChangeCurrency = useCallback((currency: Currency) => {
		dispatch(profileActions.updateProfile({ currency }));
	}, [dispatch]);

	const onChangeAvatar = useCallback((value: string) => {
		dispatch(profileActions.updateProfile({ avatar: value }));
	}, [dispatch]);

	const onChangeCountry = useCallback((country: Country) => {
		dispatch(profileActions.updateProfile({ country }));
	}, [dispatch]);

	const onChangeCity = useCallback((value: string) => {
		dispatch(profileActions.updateProfile({ city: value }));
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={reducers}>
			<Page className={classNames('', {}, [className])}>
				<ProfilePageHeader />
				{validateErrors && (
					<div className={styles.errorBlock}>
						{validateErrors.map((err) => (
							<Text
								key={err}
								theme={TextTheme.ERROR}
								align={TextAlign.CENTER}
								text={validateProfileError[err]}
							/>
						))}
					</div>
				)}
				<ProfileCard
					data={form}
					isLoading={isLoading}
					error={error}
					readonly={readonly}
					onChangeFirstname={onChangeFirstname}
					onChangeLastname={onChangeLastname}
					onChangeUsername={onChangeUsername}
					onChangeAge={onChangeAge}
					onChangeCountry={onChangeCountry}
					onChangeCity={onChangeCity}
					onChangeAvatar={onChangeAvatar}
					onChangeCurrency={onChangeCurrency}
				/>
			</Page>
		</DynamicModuleLoader>
	);
});

export default ProfilePage;
