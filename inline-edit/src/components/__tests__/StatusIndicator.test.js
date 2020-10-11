import React from 'react';
import { render } from '@testing-library/react';
import StatusIndicator from '../StatusIndicator';

test('StatusIndicator should update based on status prop', () => {
  const { getByText, getByRole, rerender, getByTestId } = render(
    <StatusIndicator status="loading" />
  );
  const container = getByRole('alert');
  expect(getByTestId('loadingspinner')).toHaveClass('spinner');
  expect(getByText(/loading/i)).toHaveClass('visuallyhidden');

  rerender(<StatusIndicator status="success" />);
  expect(container).toContainElement(getByTestId('checkmarksvg'));
  expect(getByText(/successfully submitted/i)).toHaveClass('visuallyhidden');

  rerender(<StatusIndicator status="error" />);
  expect(container).toContainElement(getByTestId('crosssvg'));

  rerender(<StatusIndicator status={null} />);
  expect(container).toBeEmptyDOMElement();
});
