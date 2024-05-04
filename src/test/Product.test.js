import React from 'react';
import { render } from '@testing-library/react';
import Product from '../initialcomponents/Product';

test('renders product component', () => {
  const { getByText } = render(<Product />);
  
  // Check if the component renders text content
  expect(getByText('DATA ANALYTICS DASHBOARD')).toBeInTheDocument();
  expect(getByText('Manage Data Analytics Centrally')).toBeInTheDocument();
  
  // You can add more specific tests for other elements and features of your component
});