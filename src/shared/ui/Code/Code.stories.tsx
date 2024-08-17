import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Code } from './Code';

export default {
	title: 'shared/Code',
	component: Code,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		to: '/',
	},
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	code: `import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import styles from './Code.module.scss';

interface AvatarProps {
  className?: string,
  code?: string,
}

export const Code = memo(({
	className,
	code,
}: AvatarProps) => (
	<code className={classNames(styles.Code, {}, [className])}>
		{code}
	</code>
));
`,
};
