import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { Text, TextSize } from './Text';

export default {
	title: 'shared/Text',
	component: Text,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

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
OnlyText.args = {
	text: 'Text',
};

export const NormalSize = Template.bind({});
NormalSize.args = {
	title: 'Title',
	text: 'Text',
	size: TextSize.M,
};

export const NormalSizeL = Template.bind({});
NormalSizeL.args = {
	title: 'Title',
	text: 'Text',
	size: TextSize.L,
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

export const NormalSizeDark = Template.bind({});
NormalSizeDark.args = {
	title: 'Title',
	text: 'Text',
	size: TextSize.M,
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];

export const NormalSizeDarkL = Template.bind({});
NormalSizeDarkL.args = {
	title: 'Title',
	text: 'Text',
	size: TextSize.L,
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
