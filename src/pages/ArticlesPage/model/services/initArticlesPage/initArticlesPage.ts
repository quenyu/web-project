import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageAction } from '../../slices/articlesPageSlice';

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
	'articlesPage/initArticlesPage',
	async (_, { getState, dispatch }) => {
		const inited = getArticlesPageInited(getState());

		if (!inited) {
			dispatch(articlesPageAction.initState());
			dispatch(fetchArticlesList({
				page: 1,
			}));
		}
	},
);
