import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {expect, test} from '@jest/globals';
import {jest} from '@jest/globals';
import ProductItem from '../../src/components/ProductItem';

const mockProduct = {
  img: 'https://example.com/image.jpg',
  name: 'Sample Product',
  price: 20,
  colour: 'Red',
  id: 1,
};

test('ProductItem component renders correctly', () => {
  const mockPressHandler = jest.fn();
  const isItemInBasket = false;

  const {getByText} = render(
    <ProductItem
      product={mockProduct}
      onPress={mockPressHandler}
      isItemInBasket={isItemInBasket}
    />,
  );

  const productName = getByText('Sample Product');
  expect(productName).toBeTruthy();

  const price = getByText('Price: 20');
  expect(price).toBeTruthy();

  const colour = getByText('Colour: Red');
  expect(colour).toBeTruthy();

  const addButton = getByText('Add To Cart');
  fireEvent.press(addButton);
  expect(mockPressHandler).toHaveBeenCalledTimes(1);
});

test('ProductItem component renders "Remove From Cart" when in the basket', () => {
  const mockPressHandler = jest.fn();
  const isItemInBasket = true;

  const {getByText} = render(
    <ProductItem
      product={mockProduct}
      onPress={mockPressHandler}
      isItemInBasket={isItemInBasket}
    />,
  );

  const removeButton = getByText('Remove From Cart');
  expect(removeButton).toBeTruthy();
});
