import React from 'react';
import { render } from '@testing-library/react';
import CalculatorInputs from './components/calculator/CalculatorInputs';

test('CalculatorInputs renders correctly', () => {
  const handleClick = jest.fn();
  const { container } = render(<CalculatorInputs handleClick={handleClick} />);
  expect(container).toMatchSnapshot();
});
