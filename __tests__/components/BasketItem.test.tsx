import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import BasketItem from '../../src/components/BasketItem';
import {expect, test} from '@jest/globals';
import {jest} from '@jest/globals';
const mockItem = {
  product: {
    img: 'https://example.com/image.jpg',
    name: 'Sample Product',
    price: 20,
    colour: 'Red',
    id: 1,
  },
  quantity: 2,
  productId: 1,
};

test('BasketItem component renders correctly', () => {
  const mockDeleteHandler = jest.fn();
  const mockIncrementHandler = jest.fn();
  const mockDecrementHandler = jest.fn();

  const {getByText, getByTestId} = render(
    <BasketItem
      item={mockItem}
      handleDeletePress={mockDeleteHandler}
      handleOnIncrement={mockIncrementHandler}
      handleOnDecrement={mockDecrementHandler}
    />,
  );

  const productName = getByText('Sample Product');
  expect(productName).toBeTruthy();

  const price = getByText('Price: 20');
  expect(price).toBeTruthy();

  const colour = getByText('Colour: Red');
  expect(colour).toBeTruthy();

  const quantity = getByText('2');
  expect(quantity).toBeTruthy();

  const removeButton = getByText('Remove From Cart');
  fireEvent.press(removeButton);
  expect(mockDeleteHandler).toHaveBeenCalledTimes(1);

  const incrementButton = getByTestId('increment-button');
  fireEvent.press(incrementButton);
  expect(mockIncrementHandler).toHaveBeenCalledTimes(1);

  const decrementButton = getByTestId('decrement-button');
  fireEvent.press(decrementButton);
  expect(mockDecrementHandler).toHaveBeenCalledTimes(1);
});
