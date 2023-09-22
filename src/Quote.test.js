import React from 'react';
import { render } from '@testing-library/react';
import ShowQuote from './components/quote/showQuote';

test('ShowQuote renders correctly', () => {
  const { container } = render(<ShowQuote />);
  expect(container).toMatchSnapshot();
});
