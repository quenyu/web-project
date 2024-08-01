import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/test/testAsyncThunk/testAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

describe('loginByUsername', () => {
	test('success auth', async () => {
		const userData = { id: '1', username: 'username' };

		const Thunk = new TestAsyncThunk(loginByUsername);
		Thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));
		const result = await Thunk.callThunk({ username: 'username', password: 'password' });

		expect(Thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
		expect(Thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(Thunk.api.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
	});

	test('error auth', async () => {
		const Thunk = new TestAsyncThunk(loginByUsername);
		Thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await Thunk.callThunk({ username: 'username', password: 'password' });

		expect(Thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(Thunk.api.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('error');
	});
});
