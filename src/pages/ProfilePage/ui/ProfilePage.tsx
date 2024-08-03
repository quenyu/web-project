import {
	fetchProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, profileActions, ProfileCard, profileReducer,
} from 'entities/Profile';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
	profile: profileReducer,
};

interface ProfilePageProps {
  className?: string,
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
	const { t } = useTranslation('main');
	const dispatch = useAppDispatch();
	const form = useSelector(getProfileForm);
	const error = useSelector(getProfileError);
	const isLoading = useSelector(getProfileIsLoading);
	const readonly = useSelector(getProfileReadonly);

	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);

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
			<div className={classNames('', {}, [className])}>
				<ProfilePageHeader />
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
			</div>
		</DynamicModuleLoader>
	);
});

export default ProfilePage;
