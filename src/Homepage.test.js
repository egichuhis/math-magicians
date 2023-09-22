import React from 'react';
import { render } from '@testing-library/react';
import Homepage from './components/home/Homepage';

test('Homepage renders correctly', () => {
  const { container } = render(<Homepage />);
  expect(container).toMatchSnapshot();
});
