import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { Input } from './Input';

export default {
	title: 'shared/Input',
	component: Input,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	placeholder: 'placeholder',
	value: 'value',
};

export const Dark = Template.bind({});
Dark.args = {
	placeholder: 'placeholder',
	value: 'value',
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
