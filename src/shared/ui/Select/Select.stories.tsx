import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { Select } from './Select';

export default {
	title: 'shared/Select',
	component: Select,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		to: '/',
	},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	label: 'Test',
	options: [
		{ value: 'First', content: 'First' },
		{ value: 'Second', content: 'Second' },
		{ value: 'Third', content: 'Third' },
	],
};

export const Dark = Template.bind({});
Dark.args = {
	label: 'Test',
	options: [
		{ value: 'First', content: 'First' },
		{ value: 'Second', content: 'Second' },
		{ value: 'Third', content: 'Third' },
	],
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
