import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/models/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article';

const defaultAsyncReducers: ReducersList = {
	login: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer,
};

export const StoreDecorator = (
	state: DeepPartial<StateSchema>,
	asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
	<StoreProvider
		initialState={state}
		asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
	>
		<StoryComponent />
	</StoreProvider>
);
