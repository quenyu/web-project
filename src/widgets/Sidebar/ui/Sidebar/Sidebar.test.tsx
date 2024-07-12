import { fireEvent, screen } from '@testing-library/react';
import renderWithTranslations from 'shared/lib/test/renderWithTranslations/renderWithTranslations';
import { Sidebar } from './Sidebar';

describe('sidebar', () => {
	test('with text in button', () => {
		renderWithTranslations(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
	test('toggle sidebar', () => {
		renderWithTranslations(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
		fireEvent.click(screen.getByTestId('sidebar-button'));
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});
});
