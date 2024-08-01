import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string,
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
	const { t } = useTranslation('profile');
	const data = useSelector(getProfileData);
	const error = useSelector(getProfileError);
	const isLoading = useSelector(getProfileIsLoading);

	return (
		<div className={classNames(styles.ProfileCard, {}, [className])}>
			<h1>
				{t('Профиль')}
			</h1>
			<div>
				<Input
					value={data?.firstName}
					placeholder={t('Имя пользователя')}
				/>
				<Input
					value={data?.lastName}
					placeholder={t('Фамилия пользователя')}
				/>
			</div>
		</div>
	);
};
