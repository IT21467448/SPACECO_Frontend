import React from 'react';
import { render } from '@testing-library/react';
import Rapidscat from '../components/Banner';

test('renders Rapidscat component', () => {
  const { getByText, getByAltText } = render(<Rapidscat />);
  
  // Check if the component renders text content
  expect(getByText('our mission')).toBeInTheDocument();
  expect(getByText('Rapidscat')).toBeInTheDocument();
  expect(getByText('Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae reprehenderit expedita corporis, non doloremque. Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae reprehenderit expedita corporis, non doloremque. Consequatur consectetur quisquam qui sunt.')).toBeInTheDocument();
  
  // Check if the component renders the image correctly
  const image = getByAltText('');
  expect(image).toBeInTheDocument();
  expect(image.src).toContain('satelite1.jpg'); // Ensure correct image source
  
  // You can add more specific tests for other elements and features of your component
});
