import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import AddNewComment from './AddNewComment';

export default {
	title: 'features/AddNewComment',
	component: AddNewComment,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof AddNewComment>;

const Template: ComponentStory<typeof AddNewComment> = (args) => <AddNewComment {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
	addNewComment: { text: 'text' },
})];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoreDecorator({
	addNewComment: { error: 'error' },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({
	addNewComment: { text: 'text' },
})];

export const WithErrorDark = Template.bind({});
WithErrorDark.args = {};
WithErrorDark.decorators = [StoreDecorator({
	addNewComment: { error: 'error' },
})];
