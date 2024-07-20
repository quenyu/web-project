import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { newReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
	children?: ReactNode;
	initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
	const store = newReduxStore(initialState as StateSchema);

	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};
