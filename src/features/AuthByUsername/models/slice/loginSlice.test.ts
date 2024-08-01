import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice', () => {
	test('test set username', () => {
		const state: DeepPartial<LoginSchema> = {
			username: 'username',
		};
		expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('username'),
		)).toEqual({ username: 'username' });
	});

	test('test set password', () => {
		const state: DeepPartial<LoginSchema> = {
			password: 'password',
		};
		expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('password'),
		)).toEqual({ password: 'password' });
	});
});
