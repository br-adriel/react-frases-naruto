import { fireEvent, render, screen } from '@testing-library/react';
import { App } from './App';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const response = { speaker: 'Speaker', quote: 'Test quote' };
const server = setupServer(
  rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
    return res(ctx.json(response));
  })
);

describe('it renders the App', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('it renders a button', () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('it renders a image of naturo', () => {
    render(<App />);
    const image = screen.getByAltText(/naruto/i);
    expect(image).toBeInTheDocument();
  });

  test('it updates the quote when button is clicked', async () => {
    const customResponse = {
      speaker: 'custom test speaker',
      quote: 'teste quote',
    };

    render(<App />);

    server.use(
      rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
        return res(ctx.json(customResponse));
      })
    );

    const btn = screen.getByRole('button');
    fireEvent.click(btn);

    const quote = await screen.findByText(/custom test speaker/i);
    expect(quote).toBeInTheDocument();
  });

  test('it loads a quote automatically when it opens', async () => {
    render(<App />);

    const quote = await screen.findByText(/test quote/i);
    expect(quote).toBeInTheDocument();
  });
});
