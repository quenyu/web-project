import { TestAsyncThunk } from 'shared/lib/test/testAsyncThunk/testAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { fetchProfileData } from './fetchProfileData';

jest.mock('axios');

const userData = {
	firstName: 'first',
	lastName: 'last',
	username: 'username',
	age: 1,
	city: 'as',
	currency: Currency.EUR,
	country: Country.AUSTRALIA,
};

describe('fetchProfileData', () => {
	test('success login', async () => {
		const Thunk = new TestAsyncThunk(fetchProfileData);
		Thunk.api.get.mockReturnValue(Promise.resolve({ data: userData }));
		const result = await Thunk.callThunk('1');

		expect(Thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(userData);
	});

	test('error login', async () => {
		const Thunk = new TestAsyncThunk(fetchProfileData);
		Thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await Thunk.callThunk('1');

		expect(Thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('error');
	});
});
