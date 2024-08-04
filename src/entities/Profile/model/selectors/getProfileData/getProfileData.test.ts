import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
	test('Data', () => {
		const data = {
			firstName: 'first',
			lastName: 'last',
			username: 'username',
			age: 1,
			city: 'as',
			currency: Currency.EUR,
			country: Country.AUSTRALIA,
		};

		const state: DeepPartial<StateSchema> = {
			profile: {
				data,
			},
		};
		expect(getProfileData(state as StateSchema)).toEqual(data);
	});
	test('Empty value', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileData(state as StateSchema)).toEqual(undefined);
	});
});
