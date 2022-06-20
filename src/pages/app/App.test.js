import { render, screen } from '@testing-library/react';
import App from './App';

describe('renders the App', () => {
  test('it renders a button', () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
