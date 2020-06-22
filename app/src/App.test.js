import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { fetchHelloWorld }  from './fetchHelloWorld';

jest.mock('./fetchHelloWorld')

describe('App', () => {
  fetchHelloWorld.mockReturnValue(Promise.resolve({hello: 'World!'}))

  it('doesnt renders hello world', () => {
    render(<App />);

    const element = screen.queryByText(/hello/);
    expect(element).not.toBeInTheDocument();
  });

  it('renders hello world when button is clicked', async () => {
    render(<App />);

    const button = screen.getByRole('button');
    userEvent.click(button);

    const element = await screen.findByText("hello: World!");
    expect(element).toBeInTheDocument();
  });
})