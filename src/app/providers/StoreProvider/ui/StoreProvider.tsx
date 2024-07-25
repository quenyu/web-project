import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { newReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
	children?: ReactNode;
	initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
	const store = newReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject,
	);

	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};
