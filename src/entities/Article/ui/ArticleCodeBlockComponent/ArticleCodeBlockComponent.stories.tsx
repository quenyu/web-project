import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

export default {
	title: 'entities/ArticleCodeBlockComponent',
	component: ArticleCodeBlockComponent,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		to: '/',
	},
} as ComponentMeta<typeof ArticleCodeBlockComponent>;

const Template: ComponentStory<typeof ArticleCodeBlockComponent> = (args: any) => <ArticleCodeBlockComponent {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
