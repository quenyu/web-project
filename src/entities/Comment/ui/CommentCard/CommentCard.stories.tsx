import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
	title: 'entities/CommentCard',
	component: CommentCard,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	comment: {
		id: '1',
		text: 'hello world',
		user: { id: '1', username: 'Vasya' },
	},
};

export const Loading = Template.bind({});
Loading.args = {
	comment: {
		id: '1',
		text: 'hello world',
		user: { id: '1', username: 'Vasya' },
	},
	isLoading: true,
};

export const Dark = Template.bind({});
Dark.args = {
	comment: {
		id: '1',
		text: 'hello world',
		user: { id: '1', username: 'Vasya' },
	},
};

export const LoadingDark = Template.bind({});
LoadingDark.args = {
	comment: {
		id: '1',
		text: 'hello world',
		user: { id: '1', username: 'Vasya' },
	},
	isLoading: true,
};
