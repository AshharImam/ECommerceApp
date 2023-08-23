import ProductItemModel from '../models/ProductItemModel';

export type AddToBasketType = {
  productId: number;
  quantity: number;
  product: ProductItemModel;
};
