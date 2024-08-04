import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import Avatar from 'shared/assets/tests/avatar.jpg';
import { ProfileCard } from './ProfileCard';

export default {
	title: 'entities/ProfileCard',
	component: ProfileCard,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const PrimaryNormal = Template.bind({});
PrimaryNormal.args = {
	data: {
		firstName: 'first',
		lastName: 'last',
		username: 'username',
		age: 1,
		avatar: Avatar,
		city: 'as',
		currency: Currency.EUR,
		country: Country.AUSTRALIA,
	},
};

export const WithError = Template.bind({});
WithError.args = {
	error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
	isLoading: true,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
	data: {
		firstName: 'first',
		lastName: 'last',
		username: 'username',
		age: 1,
		avatar: Avatar,
		city: 'as',
		currency: Currency.EUR,
		country: Country.AUSTRALIA,
	},
};
PrimaryDark.decorators = [ThemeDecorator(Themes.DARK)];

export const WithErrorDark = Template.bind({});
WithErrorDark.args = {
	error: 'error',
};
WithErrorDark.decorators = [ThemeDecorator(Themes.DARK)];

export const LoadingDark = Template.bind({});
LoadingDark.args = {
	isLoading: true,
};
LoadingDark.decorators = [ThemeDecorator(Themes.DARK)];
