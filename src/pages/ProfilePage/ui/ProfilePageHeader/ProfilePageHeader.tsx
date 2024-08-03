import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import styles from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string,
}

export const ProfilePageHeader = memo(({ className }: ProfilePageHeaderProps) => {
	const { t } = useTranslation('profile');
	const dispatch = useAppDispatch();
	const readonly = useSelector(getProfileReadonly);

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false));
	}, [dispatch]);

	const onCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelEdit());
	}, [dispatch]);

	const onSaveEdit = useCallback(() => {
		dispatch(updateProfileData());
	}, [dispatch]);

	return (
		<div className={classNames(styles.ProfilePageHeader, {}, [className])}>
			<h1 className={styles.ProfilePageHeaderTitle}>
				{t('Профиль')}
			</h1>
			{readonly ? (
				<Button
					theme={ButtonTheme.OUTLINE}
					size={ButtonSize.L}
					className={styles.ProfilePageHeaderBtn}
					onClick={onEdit}
				>
					{t('Редактировать')}
				</Button>
			)
				: (
					<div className={styles.ProfilePageHeaderBtnGroup}>
						<Button
							theme={ButtonTheme.OUTLINE}
							size={ButtonSize.L}
							className={styles.ProfilePageHeaderBtnCncl}
							onClick={onCancelEdit}
						>
							{t('Отменить')}
						</Button>
						<Button
							theme={ButtonTheme.OUTLINE}
							size={ButtonSize.L}
							className={styles.ProfilePageHeaderBtnSv}
							onClick={onSaveEdit}
						>
							{t('Сохранить')}
						</Button>
					</div>
				)}
		</div>
	);
});
