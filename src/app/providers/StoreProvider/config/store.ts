import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateSchema } from './StateSchema';

export const newReduxStore = (initialState?: StateSchema) => configureStore<StateSchema>({
	reducer: {
		counter: counterReducer,
	},
	devTools: Dev,
	preloadedState: initialState,
});
