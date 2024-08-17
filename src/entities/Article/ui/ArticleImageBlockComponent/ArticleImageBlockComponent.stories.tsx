import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

export default {
	title: 'entities/ArticleImageBlockComponent',
	component: ArticleImageBlockComponent,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		to: '/',
	},
} as ComponentMeta<typeof ArticleImageBlockComponent>;

const Template: ComponentStory<typeof ArticleImageBlockComponent> = (args: any) => <ArticleImageBlockComponent {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
