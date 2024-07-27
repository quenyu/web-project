import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
	test('String value', () => {
		const state: DeepPartial<StateSchema> = {
			login: {
				username: 'test',
			},
		};
		expect(getLoginUsername(state as StateSchema)).toEqual('test');
	});
	test('Empty value', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginUsername(state as StateSchema)).toEqual('');
	});
});
