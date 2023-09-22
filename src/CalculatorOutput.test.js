import React from 'react';
import { render } from '@testing-library/react';
import CalculatorOutput from './components/calculator/CalculatorOutput';

test('CalculatorOutput renders correctly', () => {
  const { container } = render(<CalculatorOutput />);
  expect(container).toMatchSnapshot();
});
