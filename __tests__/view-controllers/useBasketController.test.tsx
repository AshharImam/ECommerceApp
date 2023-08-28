import {renderHook, act} from '@testing-library/react-hooks';
import useBasketViewModel from '../../src/view-models/useBasketViewModel';
import useBasketController from '../../src/view-controllers/useBasketController';
import {expect, describe, beforeEach, afterEach, it} from '@jest/globals';
import {jest} from '@jest/globals';
jest.mock('../../src/view-models/useBasketViewModel');

describe('useBasketController', () => {
  const basketViewModelMock = {
    basketItems: [
      {productId: 1, quantity: 2, product: {price: 10}},
      {productId: 2, quantity: 3, product: {price: 20}},
    ],
    handleRemoveFromBasket: jest.fn(),
    handleUpdateQuantity: jest.fn(),
  };

  beforeEach(() => {
    useBasketViewModel.mockReturnValue(basketViewModelMock);
  });

  afterEach(() => {
    useBasketViewModel.mockClear();
    basketViewModelMock.handleRemoveFromBasket.mockClear();
    basketViewModelMock.handleUpdateQuantity.mockClear();
  });

  it('should calculate the total price correctly', () => {
    const {result} = renderHook(() => useBasketController());

    expect(result.current.totalPrice).toBe(80); // (2 * 10) + (3 * 20)
  });

  it('should call handleUpdateQuantity when handleUpdateQuantityPress is called', () => {
    const {result} = renderHook(() => useBasketController());

    act(() => {
      result.current.handleUpdateQuantityPress(1, 4);
    });

    expect(basketViewModelMock.handleUpdateQuantity).toHaveBeenCalledWith(1, 4);
  });

  it('should call handleRemoveFromBasket when handleDeleteItemPress is called', () => {
    const {result} = renderHook(() => useBasketController());

    act(() => {
      result.current.handleDeleteItemPress(2);
    });

    expect(basketViewModelMock.handleRemoveFromBasket).toHaveBeenCalledWith(2);
  });
});
