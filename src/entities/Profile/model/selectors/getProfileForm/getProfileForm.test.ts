import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
	test('Form', () => {
		const form = {
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
				form,
			},
		};
		expect(getProfileForm(state as StateSchema)).toEqual(form);
	});
	test('Empty value', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileForm(state as StateSchema)).toEqual(undefined);
	});
});
