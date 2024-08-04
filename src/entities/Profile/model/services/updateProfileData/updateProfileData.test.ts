import { TestAsyncThunk } from 'shared/lib/test/testAsyncThunk/testAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileError } from '../../types/profile';

jest.mock('axios');

const data = {
	username: 'admin',
	age: 18,
	lastName: 'asd',
	firstName: 'asd',
	city: 'asd',
	country: Country.AUSTRALIA,
	currency: Currency.USD,
};

describe('updateProfileData', () => {
	test('success update', async () => {
		const Thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: data,
			},
		});
		Thunk.api.put.mockReturnValue(Promise.resolve({ data }));
		const result = await Thunk.callThunk();

		expect(Thunk.api.put).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(data);
	});

	test('server error', async () => {
		const Thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: data,
			},
		});
		Thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await Thunk.callThunk();

		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
	});

	test('client error', async () => {
		const Thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: {
					...data,
					firstName: '',
				},
			},
		});
		Thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await Thunk.callThunk();

		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
	});
});
