import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { Card } from './Card';
import { Text } from '../Text/Text';

export default {
	title: 'shared/Card',
	component: Card,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		to: '/',
	},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Light = Template.bind({});
Light.args = {
	children: <Text title="title" text="text" />,
};

export const Dark = Template.bind({});
Dark.args = {
	children: <Text title="title" text="text" />,
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
