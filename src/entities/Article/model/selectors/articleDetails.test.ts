import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetails';

describe('articleDetails', () => {
	test('Data || getArticleDetailsData', () => {
		const data = {
			id: '1',
			title: 'title',
		};

		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				data,
			},
		};
		expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
	});
	test('Empty value || getArticleDetailsData', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
	});

	test('Error || getArticleDetailsError', () => {
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				error: 'error',
			},
		};
		expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
	});
	test('Empty value || getArticleDetailsError', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
	});

	test('IsLoading || getArticleDetailsIsLoading', () => {
		const state: DeepPartial<StateSchema> = {
			articleDetails: {
				isLoading: true,
			},
		};
		expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
	});
	test('Empty value || getArticleDetailsIsLoading', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
	});
});
