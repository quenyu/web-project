import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

export const fetchCommentsByArticleID = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>(
	'articleDetails/fetchCommentsByArticleID',
	async (
		articleID,
		{ extra, rejectWithValue },
	) => {
		if (!articleID) {
			return rejectWithValue('error');
		}

		try {
			const response = await extra.api.get<Comment[]>('/comments', {
				params: {
					articleID,
					_expand: 'user',
				},
			});

			if (!response.data) {
				throw new Error();
			}

			return response.data;
		} catch (error) {
			console.log(error);
			return rejectWithValue(('error'));
		}
	},
);
