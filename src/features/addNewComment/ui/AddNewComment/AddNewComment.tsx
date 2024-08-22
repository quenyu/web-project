import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { getAddNewCommentError, getAddNewCommentText } from '../../model/selectors/addNewComment';
import { addNewCommentActions, addNewCommentReducer } from '../../model/slices/addNewCommentSlice';
import styles from './AddNewComment.module.scss';

interface AddNewCommentProps {
  className?: string,
  onSendComment: (text: string) => void,
}

const reducers: ReducersList = {
	addNewComment: addNewCommentReducer,
};

const AddNewComment = memo(({ className, onSendComment }: AddNewCommentProps) => {
	const { t } = useTranslation('article');
	const dispatch = useAppDispatch();
	const text = useSelector(getAddNewCommentText);
	const error = useSelector(getAddNewCommentError);

	const onCommentTextChange = useCallback((value: string) => {
		dispatch(addNewCommentActions.setText(value));
	}, [dispatch]);

	const onSendHandler = useCallback(() => {
		onSendComment(text || '');
		onCommentTextChange('');
	}, [onCommentTextChange, onSendComment, text]);

	return (
		<DynamicModuleLoader reducers={reducers}>
			<div className={classNames(styles.AddNewComment, {}, [className])}>
				<Input
					placeholder={t('Введите текст комментария')}
					className={styles.Input}
					value={text}
					onChange={onCommentTextChange}
				/>
				<Button
					className={styles.Button}
					onClick={onSendHandler}
				>
					{t('Отправить')}
				</Button>
				{error && <div className={styles.Error}>{t('Ошибка при отправке')}</div>}
			</div>
		</DynamicModuleLoader>
	);
});

export default AddNewComment;
