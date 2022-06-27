import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('it renders the Button with text', () => {
  test('it renders the text passed', () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByText(/click me/i);
    expect(btn).toBeInTheDocument();
  });
});
