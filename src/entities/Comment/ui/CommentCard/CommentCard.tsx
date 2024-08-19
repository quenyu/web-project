import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import styles from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
  className?: string,
  isLoading?: boolean,
  comment: Comment,
}

export const CommentCard = memo(({ className, isLoading, comment }: CommentCardProps) => {
	if (isLoading) {
		return (
			<div className={classNames(styles.CommentCard, {}, [className])}>
				<div className={styles.CommentCardHeader}>
					<Skeleton className={styles.Avatar} width={30} height={30} border="50%" />
					<Skeleton className={styles.Username} width={100} height={15} />
				</div>
				<Skeleton className={styles.CommentCardText} width="100%" height={50} />
			</div>
		);
	}

	return (
		<div className={classNames(styles.CommentCard, {}, [className])}>
			<div className={styles.CommentCardHeader}>
				{comment.user.avatar
					? (
						<Avatar
							size={35}
							src={comment.user.avatar}
							className={styles.Avatar}
						/>
					)
					: null}
				<Text className={styles.Username} title={comment.user.username} />
			</div>
			<Text className={styles.CommentCardText} text={comment.text} />
		</div>
	);
});
