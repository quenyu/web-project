import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/profile';

describe('getProfileValidateErrors', () => {
	test('ValidateErrors', () => {
		const validateError = [
			ValidateProfileError.INCORRECT_AGE,
			ValidateProfileError.INCORRECT_COUNTRY,
			ValidateProfileError.INCORRECT_USERNAME,
			ValidateProfileError.INCORRECT_USER_DATA,
			ValidateProfileError.NO_DATA,
			ValidateProfileError.SERVER_ERROR,
		];

		const state: DeepPartial<StateSchema> = {
			profile: {
				validateError,
			},
		};
		expect(getProfileValidateErrors(state as StateSchema)).toEqual([
			ValidateProfileError.INCORRECT_AGE,
			ValidateProfileError.INCORRECT_COUNTRY,
			ValidateProfileError.INCORRECT_USERNAME,
			ValidateProfileError.INCORRECT_USER_DATA,
			ValidateProfileError.NO_DATA,
			ValidateProfileError.SERVER_ERROR,
		]);
	});
	test('Empty value', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
	});
});
