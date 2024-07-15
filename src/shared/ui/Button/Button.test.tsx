import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('button', () => {
	test('with text in button', () => {
		render(<Button>Test</Button>);
		expect(screen.getByText('Test')).toBeInTheDocument();
	});
	test('with className clear', () => {
		render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
		expect(screen.getByText('Test')).toHaveClass('clear');
	});
});
