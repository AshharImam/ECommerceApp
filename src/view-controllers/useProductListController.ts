import {useEffect, useState} from 'react';
import ProductItemModel from '../models/ProductItemModel';
import {AddToBasketType} from '../types/genericTypes';
import useBasketViewModel from '../view-models/useBasketViewModel';
import useProductViewModel from '../view-models/useProductViewModel';

const useProductListController = () => {
  const [products, setProducts] = useState<ProductItemModel[]>([]);
  const {fetchProducts} = useProductViewModel();
  const {handleAddToBasket, isItemInBasket} = useBasketViewModel();
  useEffect(() => {
    fetchProducts().then((products: ProductItemModel[]) => {
      setProducts(products);
    });
  }, []);
  const handleAddToCart = (data: AddToBasketType) => {
    handleAddToBasket(data);
  };

  return {products, handleAddToCart, isItemInBasket};
};

export default useProductListController;
