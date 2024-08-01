import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
	test('String value', () => {
		const state: DeepPartial<StateSchema> = {
			login: {
				password: 'test',
			},
		};
		expect(getLoginPassword(state as StateSchema)).toEqual('test');
	});
	test('Empty value', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginPassword(state as StateSchema)).toEqual('');
	});
});
