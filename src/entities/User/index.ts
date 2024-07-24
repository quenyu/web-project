import { getUserAuthData } from './models/selectors/getUserAuthData/getUserAuthData';
import { userReducer, userActions } from './models/slice/userSlice';
import { UserSchema, User } from './models/types/user';

export {
	userReducer,
	userActions,
	UserSchema,
	User,
	getUserAuthData,
};
