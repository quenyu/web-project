import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
	getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPagePage,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageAction } from '../../slices/articlesPageSlice';

export const fetchNextPageArticles = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
	'articlesPage/fetchNextPageArticles',
	async (_, { getState, dispatch }) => {
		const hasMore = getArticlesPageHasMore(getState());
		const page = getArticlesPagePage(getState());
		const isLoading = getArticlesPageIsLoading(getState());

		if (hasMore && !isLoading) {
			dispatch(articlesPageAction.setPage(page + 1));
			dispatch(fetchArticlesList({
				page: page + 1,
			}));
		}
	},
);
