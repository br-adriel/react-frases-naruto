import { render, screen } from '@testing-library/react';
import Quote from './Quote';

describe('it renders the Quote component', () => {
  test('it renders the quote text passed', () => {
    render(<Quote text='I think and quote' />);
    const text = screen.getByText(/I think and quote/i);
    expect(text).toBeInTheDocument();
  });

  test('it renders the text "..." when no text is passed', () => {
    render(<Quote />);
    const text = screen.getByText('...');
    expect(text).toBeInTheDocument();
  });

  test('it renders the author passed', () => {
    render(<Quote author='someone' />);
    const author = screen.getByText(/someone/i);
    expect(author).toBeInTheDocument();
  });

  test('it renders no author when none is passed', () => {
    render(<Quote />);
    const author = screen.getByText('-');
    expect(author).toBeInTheDocument();
  });
});
