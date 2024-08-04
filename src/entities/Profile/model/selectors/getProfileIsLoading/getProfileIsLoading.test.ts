import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
	test('IsLoading', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				isLoading: true,
			},
		};
		expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
	});
	test('Empty value', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
	});
});
