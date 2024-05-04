import React from 'react';
import { render } from '@testing-library/react';
import Analytics from '../components/Analytics';

test('renders analytics component', () => {
  const { getByText, getByAltText } = render(<Analytics />);
  
  // Check if the component renders text content
  expect(getByText('DATA ANALYTICS DASHBOARD')).toBeInTheDocument();
  expect(getByText('Manage Data Analytics Centrally')).toBeInTheDocument();
  
  // Check if the component renders the image correctly
  const image = getByAltText('/');
  expect(image).toBeInTheDocument();
  expect(image.src).toContain('mars6.jpg'); // Ensure correct image source
  
  // You can add more specific tests for other elements and features of your component
});
