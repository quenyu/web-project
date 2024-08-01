import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
	test('Error', () => {
		const state: DeepPartial<StateSchema> = {
			login: {
				error: 'error',
			},
		};
		expect(getLoginError(state as StateSchema)).toEqual('error');
	});
	test('Empty value', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginError(state as StateSchema)).toEqual(undefined);
	});
});
