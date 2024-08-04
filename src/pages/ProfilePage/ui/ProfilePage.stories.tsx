import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import ProfilePage from './ProfilePage';

export default {
	title: 'pages/ProfilePage',
	component: ProfilePage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		to: '/',
	},
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const PrimaryNormal = Template.bind({});
PrimaryNormal.args = {};
PrimaryNormal.decorators = [StoreDecorator({
	profile: {
		form: {
			firstName: 'first',
			lastName: 'last',
			username: 'username',
			age: 1,
			city: 'as',
			currency: Currency.EUR,
			country: Country.AUSTRALIA,
		},
	},
})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Themes.DARK), StoreDecorator({
	profile: {
		form: {
			firstName: 'first',
			lastName: 'last',
			username: 'username',
			age: 1,
			city: 'as',
			currency: Currency.EUR,
			country: Country.AUSTRALIA,
		},
	},
})];
