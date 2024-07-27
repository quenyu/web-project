import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/test/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('sidebar', () => {
	test('with text in button', () => {
		componentRender(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
	test('toggle sidebar', () => {
		componentRender(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
		fireEvent.click(screen.getByTestId('sidebar-button'));
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});
});
