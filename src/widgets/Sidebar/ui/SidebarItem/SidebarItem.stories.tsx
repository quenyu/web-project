import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { SidebarItem } from './SidebarItem';

export default {
	title: 'widget/SidebarItem',
	component: SidebarItem,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof SidebarItem>;

const Template: ComponentStory<typeof SidebarItem> = (args) => <SidebarItem {...args} />;

export const Light = Template.bind({});
Light.args = {
	Icon: 'icon',
	text: 'text',
	path: RoutePath.main,
};

export const Dark = Template.bind({});
Dark.args = {
	Icon: 'icon',
	text: 'text',
	path: RoutePath.main,
};
Dark.decorators = [ThemeDecorator(Themes.DARK)];

export const CollapsedNormal = Template.bind({});
CollapsedNormal.args = {
	Icon: 'icon',
	text: 'text',
	path: RoutePath.main,
	collapsed: true,
};

// export const CollapsedDark = Template.bind({});
// CollapsedDark.args = {
// 	collapsed: true,
// };
// Dark.decorators = [ThemeDecorator(Themes.DARK)];
