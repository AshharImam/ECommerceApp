import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {expect, describe, it} from '@jest/globals';
import {jest} from '@jest/globals';
import BasketItem from '../../src/components/BasketItem';
describe('BasketItem', () => {
  const mockItem = {
    productId: 1,
    product: {
      id: 1,
      img: 'mockImageUrl',
      name: 'Mock Product',
      price: 20,
      colour: 'Blue',
    },
    quantity: 2,
  };

  it('should render BasketItem correctly', () => {
    const {getByText, getByTestId} = render(
      <BasketItem
        item={mockItem}
        handleDeletePress={() => {}}
        handleOnIncrement={() => {}}
        handleOnDecrement={() => {}}
      />,
    );

    const productName = getByText('Mock Product');
    const productPrice = getByText('Price: 20');
    const productColour = getByText('Colour: Blue');
    const decrementButton = getByTestId('decrement-button');
    const incrementButton = getByTestId('increment-button');
    const quantityText = getByText('2');
    const removeButton = getByText('Remove From Cart');

    expect(productName).toBeTruthy();
    expect(productPrice).toBeTruthy();
    expect(productColour).toBeTruthy();
    expect(decrementButton).toBeTruthy();
    expect(incrementButton).toBeTruthy();
    expect(quantityText).toBeTruthy();
    expect(removeButton).toBeTruthy();
  });

  it('should call handleOnIncrement when increment button is pressed', () => {
    const handleOnIncrementMock = jest.fn();
    const {getByTestId} = render(
      <BasketItem
        item={mockItem}
        handleDeletePress={() => {}}
        handleOnIncrement={handleOnIncrementMock}
        handleOnDecrement={() => {}}
      />,
    );

    const incrementButton = getByTestId('increment-button');
    fireEvent.press(incrementButton);

    expect(handleOnIncrementMock).toHaveBeenCalledTimes(1);
  });

  it('should call handleOnDecrement when decrement button is pressed', () => {
    const handleOnDecrementMock = jest.fn();
    const {getByTestId} = render(
      <BasketItem
        item={mockItem}
        handleDeletePress={() => {}}
        handleOnIncrement={() => {}}
        handleOnDecrement={handleOnDecrementMock}
      />,
    );

    const decrementButton = getByTestId('decrement-button');
    fireEvent.press(decrementButton);

    expect(handleOnDecrementMock).toHaveBeenCalledTimes(1);
  });

  it('should call handleDeletePress when remove button is pressed', () => {
    const handleDeletePressMock = jest.fn();
    const {getByText} = render(
      <BasketItem
        item={mockItem}
        handleDeletePress={handleDeletePressMock}
        handleOnIncrement={() => {}}
        handleOnDecrement={() => {}}
      />,
    );

    const removeButton = getByText('Remove From Cart');
    fireEvent.press(removeButton);

    expect(handleDeletePressMock).toHaveBeenCalledTimes(1);
  });
});
