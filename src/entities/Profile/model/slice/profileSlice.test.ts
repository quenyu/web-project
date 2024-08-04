import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { validateProfileData } from '../services/validateProfileData/validateProfileData';

const data = {
	username: 'admin',
	age: 18,
	lastName: 'asd',
	firstName: 'asd',
	city: 'asd',
	country: Country.AUSTRALIA,
	currency: Currency.USD,
};

describe('profileSlice', () => {
	test('set readonly true', () => {
		const state: DeepPartial<ProfileSchema> = { readonly: false };
		expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(true),
		)).toEqual({ readonly: true });
	});

	test('cancelEdit', () => {
		const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
		expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit(),
		)).toEqual({
			readonly: true,
			ValidateProfileError: undefined,
			data,
			form: data,
		});
	});

	test('updateProfile', () => {
		const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };
		expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({ username: 'new' }),
		)).toEqual({
			form: {
				username: 'new',
			},
		});
	});

	test('test update profile service pending', () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: false,
			validateError: [ValidateProfileError.SERVER_ERROR],
		};

		expect(profileReducer(
        state as ProfileSchema,
        updateProfileData.pending,
		)).toEqual({
			isLoading: true,
			validateErrors: undefined,
		});
	});

	test('test update profile service fulfilled', () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: true,
		};

		expect(profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, ''),
		)).toEqual({
			isLoading: false,
			readonly: true,
			validateError: undefined,
			form: data,
			data,
		});
	});
});
