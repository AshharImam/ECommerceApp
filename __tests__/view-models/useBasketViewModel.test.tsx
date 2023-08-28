import {renderHook, act} from '@testing-library/react-hooks';
import {useDispatch, useSelector} from 'react-redux';

import useBasketViewModel from '../../src/view-models/useBasketViewModel';
import {
  addToBasket,
  removeFromBasket,
  updateQuantity,
} from '../../src/redux/slices/basketSlice';
import {expect, describe, beforeEach, afterEach, it} from '@jest/globals';
import {jest} from '@jest/globals';
jest.mock('react-redux');

describe('useBasketViewModel', () => {
  const dispatchMock = jest.fn();
  const useSelectorMock = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);
    useSelector.mockImplementation(callback => callback({basket: {items: []}}));
  });

  afterEach(() => {
    useDispatch.mockClear();
    useSelector.mockClear();
    dispatchMock.mockClear();
  });

  it('should add item to the basket', () => {
    const {result} = renderHook(() => useBasketViewModel());
    const data = {productId: 1, quantity: 2};

    act(() => {
      result.current.handleAddToBasket(data);
    });

    expect(dispatchMock).toHaveBeenCalledWith(addToBasket(data));
  });

  it('should remove item from the basket', () => {
    const {result} = renderHook(() => useBasketViewModel());
    const itemId = 1;

    act(() => {
      result.current.handleRemoveFromBasket(itemId);
    });

    expect(dispatchMock).toHaveBeenCalledWith(removeFromBasket(itemId));
  });

  it('should update item quantity in the basket', () => {
    const {result} = renderHook(() => useBasketViewModel());
    const itemId = 1;
    const quantity = 3;

    act(() => {
      result.current.handleUpdateQuantity(itemId, quantity);
    });

    expect(dispatchMock).toHaveBeenCalledWith(
      updateQuantity({productId: itemId, quantity}),
    );
  });

  it('should return true when item is in the basket', () => {
    useSelector.mockImplementation(callback =>
      callback({basket: {items: [{productId: 1}]}}),
    );
    const {result} = renderHook(() => useBasketViewModel());

    const isInBasket = result.current.isItemInBasket(1);

    expect(isInBasket).toBe(true);
  });

  it('should return false when item is not in the basket', () => {
    useSelector.mockImplementation(callback =>
      callback({basket: {items: [{productId: 2}]}}),
    );
    const {result} = renderHook(() => useBasketViewModel());

    const isInBasket = result.current.isItemInBasket(1);

    expect(isInBasket).toBe(false);
  });
});
