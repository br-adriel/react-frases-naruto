import { render, screen } from '@testing-library/react';
import App from './App';

describe('renders the App', () => {
  test('it renders a button', () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('it renders a quote paragraph', () => {
    render(<App />);
    const quote = screen.getByRole('paragraph');
    expect(quote).toBeInTheDocument();
  });

  test('it renders a image', () => {
    render(<App />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });
});
