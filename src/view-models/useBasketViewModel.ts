import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToBasket,
  removeFromBasket,
  updateQuantity,
} from '../redux/slices/basketSlice';
import {AddToBasketType} from '../types/genericTypes';
import {StoreType} from '../types/stateTypes';

const useBasketViewModel = () => {
  const dispatch = useDispatch();
  const basketItems = useSelector((state: StoreType) => state.basket.items);

  const handleAddToBasket = (data: AddToBasketType) => {
    dispatch(addToBasket(data));
  };
  const isItemInBasket = useCallback(
    (productId: number): boolean => {
      const isItem = basketItems.find(
        productItem => productItem.productId === productId,
      );
      if (isItem) {
        return true;
      }
      return false;
    },
    [basketItems],
  );
  const handleRemoveFromBasket = (id: number) => {
    dispatch(removeFromBasket(id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({productId: id, quantity}));
  };

  return {
    basketItems,
    handleRemoveFromBasket,
    handleUpdateQuantity,
    handleAddToBasket,
    isItemInBasket,
  };
};

export default useBasketViewModel;
