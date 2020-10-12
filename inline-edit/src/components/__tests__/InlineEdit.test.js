import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import InlineEdit from '../InlineEdit';

expect.extend(toHaveNoViolations);

test('Inline edit should have no accessibility violations', async () => {
  const { container } = render(
    <InlineEdit value="" handleChange={() => {}} handleSubmit={() => {}} />
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
