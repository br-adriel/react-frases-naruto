import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('it renders the Button component', () => {
  test('it renders the text passed', () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByText(/click me/i);
    expect(btn).toBeInTheDocument();
  });

  test('the function passed onClick works', () => {
    const callback = jest.fn();
    render(<Button onClk={callback}>Click me</Button>);

    const btn = screen.getByText(/click me/i);
    fireEvent.click(btn);

    expect(callback).toBeCalledTimes(1);
  });
});
