import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
	if (!profile) {
		return [ValidateProfileError.NO_DATA];
	}

	const {
		firstName, lastName, username, country, age,
	} = profile;

	const errors: ValidateProfileError[] = [];

	if (!firstName || !lastName) {
		errors.push(ValidateProfileError.INCORRECT_USER_DATA);
	}

	if (!age || !Number.isInteger(age)) {
		errors.push(ValidateProfileError.INCORRECT_AGE);
	}

	if (!country) {
		errors.push(ValidateProfileError.INCORRECT_COUNTRY);
	}

	if (!username) {
		errors.push(ValidateProfileError.INCORRECT_USERNAME);
	}

	return errors;
};
