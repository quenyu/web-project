import { TestAsyncThunk } from 'shared/lib/test/testAsyncThunk/testAsyncThunk';
import { fetchArticlesByID } from './fetchArticlesByID';

jest.mock('axios');

const articleId = '123';

describe('fetchArticlesByID', () => {
	test('success fetch', async () => {
		const Thunk = new TestAsyncThunk(fetchArticlesByID);
		Thunk.api.get.mockReturnValue(Promise.resolve({ data: articleId }));
		const result = await Thunk.callThunk(articleId);

		expect(Thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(articleId);
	});

	test('error fetch', async () => {
		const Thunk = new TestAsyncThunk(fetchArticlesByID);
		Thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await Thunk.callThunk(articleId);

		expect(Thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('error');
	});
});
