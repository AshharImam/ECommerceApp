import React from 'react';
import {render, waitFor, fireEvent} from '@testing-library/react-native';

import {expect, describe, beforeAll, afterEach, it} from '@jest/globals';
import {jest} from '@jest/globals';
import ProductScreen from '../../src/screens/ProductScreen';

jest.mock('../../src/view-controllers/useProductListController', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('ProductScreen', () => {
  const productsMock = [
    {id: 1, name: 'Product 1', price: 10},
    {id: 2, name: 'Product 2', price: 20},
  ];

  const useProductListControllerMock = {
    products: productsMock,
    handleAddToCart: jest.fn(),
    isItemInBasket: jest.fn(),
  };

  beforeAll(() => {
    require('../../src/view-controllers/useProductListController').default.mockReturnValue(
      useProductListControllerMock,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render products correctly', async () => {
    const {getAllByTestId} = render(<ProductScreen />);
    const productItems = await waitFor(() => getAllByTestId(/^product-item-/));

    expect(productItems).toHaveLength(productsMock.length);
  });

  it('should call handleAddToCart when a product is pressed', async () => {
    useProductListControllerMock.isItemInBasket.mockReturnValue(false);

    const {getByTestId} = render(<ProductScreen />);
    const productItem = await waitFor(() => getByTestId('product-item-1'));

    fireEvent.press(productItem);

    expect(useProductListControllerMock.handleAddToCart).toHaveBeenCalledWith({
      productId: 1,
      quantity: 1,
      product: productsMock[0],
    });
  });
});
