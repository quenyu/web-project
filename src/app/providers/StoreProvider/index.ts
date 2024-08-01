import { StoreProvider } from './ui/StoreProvider';
import { newReduxStore } from './config/store';
import type {
	StateSchema, ReduxStoreWithManager, ThunkExtra, ThunkConfig,
} from './config/StateSchema';
import type { AppDispatch } from './config/store';

export {
	StoreProvider,
	newReduxStore,
	AppDispatch,
	StateSchema,
	ReduxStoreWithManager,
	ThunkExtra,
	ThunkConfig,
};
