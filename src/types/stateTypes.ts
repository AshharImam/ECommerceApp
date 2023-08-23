import BasketItemModel from '../models/BasketItemModel';

export type BasketStateType = {
  items: Array<BasketItemModel>;
};

export type StoreType = {
  basket: BasketStateType;
};
