import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { newReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
	children?: ReactNode;
	initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
	const navigate = useNavigate();

	const store = newReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject,
    navigate,
	);

	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};
