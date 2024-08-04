import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
	test('Readonly', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				readonly: true,
			},
		};
		expect(getProfileReadonly(state as StateSchema)).toEqual(true);
	});
	test('Empty value', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
	});
});
