import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
	test('Error', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				error: 'error',
			},
		};
		expect(getProfileError(state as StateSchema)).toEqual('error');
	});
	test('Empty value', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileError(state as StateSchema)).toEqual(undefined);
	});
});
