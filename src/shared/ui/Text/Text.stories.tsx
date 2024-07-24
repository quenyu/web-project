import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { Text } from './Text';

export default {
	title: 'shared/Text',
	component: Text,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args as typeof Text} />;

export const Normal = Template.bind({});
Normal.args = {
	title: 'Title',
	text: 'Text',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
	title: 'Title',
};

export const OnlyText = Template.bind({});
OnlyTitle.args = {
	text: 'Text',
};

export const Dark = Template.bind({});
Dark.args = {
	title: 'Title',
	text: 'Text',
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
	title: 'Title',
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
	text: 'Text',
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
