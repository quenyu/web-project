import {
	CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { api } from 'shared/api/api';
import { StateSchema, ThunkExtra } from './StateSchema';
import { createReducerManager } from './reducerManager';

export const newReduxStore = (
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
) => {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer,
	};

	const reducerManager = createReducerManager(rootReducers);
	const extraArg: ThunkExtra = {
		api,
	};

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		devTools: Dev,
		preloadedState: initialState,
		middleware: (curryGetDefaultMiddleware) => curryGetDefaultMiddleware({
			thunk: {
				extraArgument: extraArg,
			},
		}),
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
};

export type AppDispatch = ReturnType<typeof newReduxStore>['dispatch']
