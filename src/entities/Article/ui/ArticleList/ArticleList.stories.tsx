import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { ArticleView } from 'entities/Article/model/types/article';
import { ArticleList } from './ArticleList';

export default {
	title: 'entities/ArticleList',
	component: ArticleList,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	articles: [],
};

export const NormalLoadingSmall = Template.bind({});
NormalLoadingSmall.args = {
	isLoading: true,
	articles: [],
};

export const NormalLoadingBig = Template.bind({});
NormalLoadingBig.args = {
	isLoading: true,
	articles: [],
	view: ArticleView.GRID1LARGE,
};

export const Dark = Template.bind({});
Dark.args = {
	articles: [],
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];

export const DarkLoadingSmall = Template.bind({});
DarkLoadingSmall.args = {
	isLoading: true,
	articles: [],
};
DarkLoadingSmall.decorators = [ThemeDecorator(Themes.DARK)];

export const DarkLoadingBig = Template.bind({});
DarkLoadingBig.args = {
	isLoading: true,
	articles: [],
	view: ArticleView.GRID1LARGE,
};
DarkLoadingBig.decorators = [ThemeDecorator(Themes.DARK)];
