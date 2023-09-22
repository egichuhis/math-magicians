import React from 'react';
import { render } from '@testing-library/react';
import Calculator from './components/calculator/Calculator';

test('Calculator renders correctly', () => {
  const { container } = render(<Calculator />);
  expect(container).toMatchSnapshot();
});
