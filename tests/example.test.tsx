import React from 'react';
import { render } from '@testing-library/react-native';
import ProductItem from '../src/components/ProductItem';

test('renders product item', () => {
  const { getByText } = render(
    <ProductItem id={1} name="Item" onPress={() => {}} />,
  );
  expect(getByText('Item')).toBeTruthy();
});
