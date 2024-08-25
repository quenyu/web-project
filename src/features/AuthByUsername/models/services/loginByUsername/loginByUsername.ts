import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsername {
  username: string,
  password: string,
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsername,
  ThunkConfig<string>
>(
	'users/fetchByIdStatus',
	async (
		{ username, password },
		{ extra, dispatch, rejectWithValue },
	) => {
		try {
			const response = await extra.api.post<User>('/login', {
				username, password,
			});

			if (!response.data) {
				throw new Error();
			}

			localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
			dispatch(userActions.setAuthData(response.data));

			extra?.navigate?.('/profile');

			return response.data;
		} catch (error) {
			console.log(error);
			return rejectWithValue(('error'));
		}
	},
);
