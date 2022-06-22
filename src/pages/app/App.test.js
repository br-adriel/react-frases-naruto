import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('it renders the App', () => {
  test('it renders a button', () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('it renders a quote paragraph', () => {
    render(<App />);
    const quote = screen.getByText(/carregando/i);
    expect(quote).toBeInTheDocument();
  });

  test('it renders a image of naturo', () => {
    render(<App />);
    const image = screen.getByAltText(/naruto/i);
    expect(image).toBeInTheDocument();
  });
});
