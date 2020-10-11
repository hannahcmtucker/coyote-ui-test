import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('app renders hello world text', () => {
  const { getByText } = render(<App />);
  const text = getByText(/hello world/i);
  expect(text).toBeInTheDocument();
});
