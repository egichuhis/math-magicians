import React from 'react';
import { render } from '@testing-library/react';
import Header from './components/layout/Header';

test('Header renders correctly', () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
});
