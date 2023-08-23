import {useMemo} from 'react';
import useBasketViewModel from '../view-models/useBasketViewModel';

const useBasketController = () => {
  const {basketItems, handleRemoveFromBasket, handleUpdateQuantity} =
    useBasketViewModel();

  const totalPrice = useMemo(
    () =>
      basketItems.reduce(
        (prev, cur) => prev + cur.quantity * cur.product.price,
        0,
      ),
    [basketItems],
  );

  const handleUpdateQuantityPress = (id: number, quantity: number) => {
    handleUpdateQuantity(id, quantity);
  };

  const handleDeleteItemPress = (id: number) => handleRemoveFromBasket(id);

  return {
    basketItems,
    totalPrice,
    handleUpdateQuantityPress,
    handleDeleteItemPress,
  };
};

export default useBasketController;
