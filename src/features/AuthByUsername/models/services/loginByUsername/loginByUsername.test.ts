import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/test/testAsyncThunk/testAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {
	test('success auth', async () => {
		const userData = { id: '1', username: 'username' };
		mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

		const Thunk = new TestAsyncThunk(loginByUsername);
		const result = await Thunk.callThunk({ username: 'username', password: 'password' });

		expect(Thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
		expect(Thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
	});

	test('error auth', async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

		const Thunk = new TestAsyncThunk(loginByUsername);
		const result = await Thunk.callThunk({ username: 'username', password: 'password' });

		expect(Thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('error');
	});
});
