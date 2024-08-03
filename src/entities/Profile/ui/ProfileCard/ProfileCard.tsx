import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile/model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string,
  data?: Profile,
  isLoading?: boolean,
  error?: string,
  readonly?: boolean,
  onChangeFirstname?: (value: string) => void,
  onChangeLastname?: (value: string) => void,
  onChangeUsername?: (value: string) => void,
  onChangeAge?: (value: string) => void,
  onChangeCurrency?: (currency: Currency) => void,
  onChangeCountry?: (country: Country) => void,
  onChangeCity?: (value: string) => void,
  onChangeAvatar?: (value: string) => void,
}

export const ProfileCard = ({
	className,
	data,
	isLoading,
	error,
	readonly,
	onChangeFirstname,
	onChangeLastname,
	onChangeUsername,
	onChangeAge,
	onChangeCountry,
	onChangeCurrency,
	onChangeCity,
	onChangeAvatar,
}: ProfileCardProps) => {
	const { t } = useTranslation('profile');

	if (isLoading) {
		return (
			<div className={classNames(styles.ProfileCard, { [styles.loading]: true }, [className])}>
				<Loader />
			</div>
		);
	}

	if (error) {
		return (
			<div className={classNames(styles.ProfileCard, {}, [className, styles.error])}>
				<Text
					theme={TextTheme.ERROR}
					title={t('Произошла ошибка при загрузке профиля')}
					text={t('Попробуйте обновить страницу')}
					align={TextAlign.CENTER}
				/>
			</div>
		);
	}

	return (
		<div className={classNames(styles.ProfileCard, {}, [className])}>
			<div className={styles.AvatarWrapper}>
				{data?.avatar && (
					<Avatar
						src={data?.avatar}
						alt={t('Фотография')}
						size={180}
					/>
				)}
			</div>
			<div className={styles.ProfileCardItem}>
				<span className={styles.ProfileCardText}>
					{t('Имя')}
				</span>
				<Input
					className={`${styles.ProfileCardInput} ${readonly ? styles.ReadOnly : ''}`}
					value={data?.firstName}
					placeholder={t('Имя')}
					onChange={onChangeFirstname}
					readOnly={readonly}
				/>
			</div>
			<div className={styles.ProfileCardItem}>
				<span className={styles.ProfileCardText}>
					{t('Фамилия')}
				</span>
				<Input
					className={`${styles.ProfileCardInput} ${readonly ? styles.ReadOnly : ''}`}
					value={data?.lastName}
					placeholder={t('Фамилия')}
					onChange={onChangeLastname}
					readOnly={readonly}
				/>
			</div>
			<div className={styles.ProfileCardItem}>
				<span className={styles.ProfileCardText}>
					{t('Ник')}
				</span>
				<Input
					className={`${styles.ProfileCardInput} ${readonly ? styles.ReadOnly : ''}`}
					value={data?.username}
					placeholder={t('Ник')}
					onChange={onChangeUsername}
					readOnly={readonly}
				/>
			</div>
			<div className={styles.ProfileCardItem}>
				<span className={styles.ProfileCardText}>
					{t('Возраст')}
				</span>
				<Input
					className={`${styles.ProfileCardInput} ${readonly ? styles.ReadOnly : ''}`}
					value={data?.age}
					placeholder={t('Возраст')}
					onChange={onChangeAge}
					readOnly={readonly}
				/>
			</div>
			<div className={styles.ProfileCardItem}>
				<span className={styles.ProfileCardText}>
					{t('Город')}
				</span>
				<Input
					className={`${styles.ProfileCardInput} ${readonly ? styles.ReadOnly : ''}`}
					value={data?.city}
					placeholder={t('Город')}
					onChange={onChangeCity}
					readOnly={readonly}
				/>
			</div>
			<div className={styles.ProfileCardItem}>
				<span className={styles.ProfileCardText}>
					{t('Фотография')}
				</span>
				<Input
					className={`${styles.ProfileCardInput} ${readonly ? styles.ReadOnly : ''}`}
					value={data?.avatar}
					placeholder={t('Фотография')}
					onChange={onChangeAvatar}
					readOnly={readonly}
				/>
			</div>
			<div className={styles.ProfileCardItem}>
				<CurrencySelect
					value={data?.currency}
					onChange={onChangeCurrency}
					readonly={readonly}
				/>
			</div>
			<div className={styles.ProfileCardItem}>
				<CountrySelect
					value={data?.country}
					onChange={onChangeCountry}
					readonly={readonly}
				/>
			</div>
		</div>
	);
};
