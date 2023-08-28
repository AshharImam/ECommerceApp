import {renderHook, act} from '@testing-library/react-hooks';
import useProductViewModel from '../../src/view-models/useProductViewModel';
import useBasketViewModel from '../../src/view-models/useBasketViewModel';

import {expect, describe, beforeEach, afterEach, it} from '@jest/globals';
import {jest} from '@jest/globals';
import useProductListController from '../../src/view-controllers/useProductListController';
jest.mock('../../src/view-models/useProductViewModel');
jest.mock('../../src/view-models/useBasketViewModel');

describe('useProductListController', () => {
  const productsMock = [
    {id: 1, name: 'Product 1', price: 10},
    {id: 2, name: 'Product 2', price: 20},
  ];

  const productViewModelMock = {
    fetchProducts: jest.fn().mockResolvedValue(productsMock),
  };

  const basketViewModelMock = {
    handleAddToBasket: jest.fn(),
    isItemInBasket: jest.fn(),
  };

  beforeEach(() => {
    useProductViewModel.mockReturnValue(productViewModelMock);
    useBasketViewModel.mockReturnValue(basketViewModelMock);
  });

  afterEach(() => {
    useProductViewModel.mockClear();
    useBasketViewModel.mockClear();
    productViewModelMock.fetchProducts.mockClear();
    basketViewModelMock.handleAddToBasket.mockClear();
    basketViewModelMock.isItemInBasket.mockClear();
  });

  it('should fetch and set products on mount', async () => {
    const {result, waitForNextUpdate} = renderHook(() =>
      useProductListController(),
    );

    await waitForNextUpdate();

    expect(result.current.products).toEqual(productsMock);
  });

  it('should call handleAddToBasket when handleAddToCart is called', () => {
    const {result} = renderHook(() => useProductListController());

    act(() => {
      result.current.handleAddToCart({productId: 1, quantity: 2});
    });

    expect(basketViewModelMock.handleAddToBasket).toHaveBeenCalledWith({
      productId: 1,
      quantity: 2,
    });
  });

  it('should call isItemInBasket when checking if item is in basket', () => {
    const {result} = renderHook(() => useProductListController());

    act(() => {
      result.current.isItemInBasket(1);
    });

    expect(basketViewModelMock.isItemInBasket).toHaveBeenCalledWith(1);
  });
});
