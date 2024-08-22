import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article/';
import { fetchCommentsByArticleID } from '../fetchCommentsByArticleID/fetchCommentsByArticleID';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>(
	'articleDetails/addCommentForArticle',
	async (
		text,
		{
			extra, rejectWithValue, getState, dispatch,
		},
	) => {
		const userData = getUserAuthData(getState());
		const article = getArticleDetailsData(getState());

		if (!userData || !article || !text) {
			return rejectWithValue('no data');
		}

		try {
			const response = await extra.api.post<Comment>('/comments', {
				articleId: article.id,
				userId: userData.id,
				text,
			});

			if (!response.data) {
				throw new Error();
			}

			dispatch(fetchCommentsByArticleID(article.id));

			return response.data;
		} catch (error) {
			return rejectWithValue(('error'));
		}
	},
);
