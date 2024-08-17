import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticlesByID = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>(
	'articleDetails/fetchArticlesByID',
	async (
		articleID,
		{ extra, rejectWithValue },
	) => {
		try {
			const response = await extra.api.get<Article>(`/articles/${articleID}`);

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
