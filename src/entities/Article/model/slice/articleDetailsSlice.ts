import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { fetchArticlesByID } from '../services/fetchArticlesByID/fetchArticlesByID';
import { Article } from '../types/article';

const initialState: ArticleDetailsSchema = {
	isLoading: false,
	error: undefined,
	data: undefined,
};

export const articleDetailsSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticlesByID.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchArticlesByID.fulfilled, (
				state,
				action: PayloadAction<Article>,
			) => {
				state.isLoading = false;
				state.data = action.payload;
			})
			.addCase(fetchArticlesByID.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
