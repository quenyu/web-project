import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
	title: 'shared/Modal',
	component: Modal,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args as typeof Modal} />;

export const Normal = Template.bind({});
Normal.args = {
	isOpen: true,
	children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam nulla optio officia molestias similique eveniet vero dolorem, saepe eos officiis!',
};

export const Dark = Template.bind({});
Dark.args = {
	isOpen: true,
	children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam nulla optio officia molestias similique eveniet vero dolorem, saepe eos officiis!',
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];
