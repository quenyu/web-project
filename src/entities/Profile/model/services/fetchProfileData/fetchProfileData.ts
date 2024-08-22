import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkConfig<string>
>(
	'profile/fetchProfileData',
	async (
		profileID,
		{ extra, rejectWithValue },
	) => {
		try {
			const response = await extra.api.get<Profile>(`/profile/${profileID}`);

			if (!response.data) {
				throw new Error();
			}

			return response.data;
		} catch (error) {
			console.log(error);
			return rejectWithValue(('error'));
		}
	},
);
