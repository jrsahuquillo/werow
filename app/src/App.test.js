import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { fetchHelloWorld }  from './fetchHelloWorld';

jest.mock('./fetchHelloWorld')

test('renders hello world', async () => {
  fetchHelloWorld.mockReturnValue(Promise.resolve({hello: 'World!'}))

  const { findByText } = render(<App />);

  const element = await findByText(/hello/);
  expect(element).toBeInTheDocument();
});