/* eslint-disable no-mixed-spaces-and-tabs */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticlesByID = createAsyncThunk<
		Article,
		string,
		ThunkConfig<string>
		>(
			'articleDetails/fetchArticlesByID',
			async (articleId, thunkApi) => {
				const { extra, rejectWithValue } = thunkApi;

				try {
					const response = await extra.api.get<Article>(`/articles/${articleId}`);

					if (!response.data) {
						throw new Error();
					}

					return response.data;
				} catch (e) {
					console.log(e);
					return rejectWithValue('error');
				}
			},
		);
