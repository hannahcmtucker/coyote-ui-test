import React from 'react';
import { render, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from '../App';
import mockFakeSubmit from '../../utils/fakeSubmit';

jest.mock('../../utils/fakeSubmit');
afterEach(() => jest.clearAllMocks());

const init = 'Hello World';
const newText = 'thanks for all the fish';

const updateInputValue = () => {
  const { getByLabelText, getByTestId } = render(<App />);
  const input = getByLabelText(/editable text/i);
  expect(input).toHaveValue(init);

  user.type(input, `{selectall}{del}${newText}{enter}`);

  expect(mockFakeSubmit).toHaveBeenCalledWith(newText);
  expect(mockFakeSubmit).toHaveBeenCalledTimes(1);

  return { input, getByTestId };
};

test('text updates when fakeSubmit resolves', async () => {
  mockFakeSubmit.mockResolvedValueOnce();

  const { input, getByTestId } = updateInputValue();

  await waitFor(() => {
    expect(input).toHaveValue(newText);
    getByTestId('checkmarksvg');
  });
});

test('text does not update when fakeSubmit rejects', async () => {
  mockFakeSubmit.mockRejectedValueOnce();

  const { input, getByTestId } = updateInputValue();

  await waitFor(() => {
    expect(input).toHaveValue(init);
    getByTestId('crosssvg');
  });
});

test('value is not submitted if unchanged from previous', () => {
  const { getByLabelText } = render(<App />);
  const input = getByLabelText(/editable text/i);

  expect(input).toHaveValue(init);

  user.type(input, `{enter}`);

  expect(mockFakeSubmit).toHaveBeenCalledTimes(0);

  expect(input).toHaveValue(init);
});
