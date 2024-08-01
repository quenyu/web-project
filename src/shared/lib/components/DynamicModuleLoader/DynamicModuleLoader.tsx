import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
  [stateKey in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps {
  reducers: ReducersList,
  removeAfterUnmount?: boolean,
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
	children,
	reducers,
	removeAfterUnmount = true,
}) => {
	const store = useStore() as ReduxStoreWithManager;
	const dispatch = useDispatch();

	useEffect(() => {
		Object.entries(reducers).forEach(([stateKey, reducer]) => {
			store.reducerManager.add(stateKey as StateSchemaKey, reducer);
			dispatch({ type: `@INIT ${stateKey} reducer` });
		});

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([stateKey]) => {
					store.reducerManager.remove(stateKey as StateSchemaKey);
					dispatch({ type: `@DESTROY ${stateKey} reducer` });
				});
			}
		};
	// eslint-disable-next-line
	}, []);

	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{children}
		</>
	);
};
