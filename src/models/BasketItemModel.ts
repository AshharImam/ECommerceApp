import ProductItemModel from './ProductItemModel';

interface BasketItemModel {
  productId: number;
  quantity: number;
  product: ProductItemModel;
}

export default BasketItemModel;
