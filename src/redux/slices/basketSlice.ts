import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import BasketItem from '../../models/BasketItemModel';

interface BasketState {
  items: BasketItem[];
}

const initialState: BasketState = {
  items: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket(state, action: PayloadAction<BasketItem>) {
      const existingItem = state.items.find(
        item => item.productId === action.payload.productId,
      );

      if (existingItem) {
        state.items = state.items.filter(
          item => item.productId !== action.payload.productId,
        );
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromBasket(state, action: PayloadAction<number>) {
      state.items = state.items.filter(
        item => item.productId !== action.payload,
      );
    },
    updateQuantity(
      state,
      action: PayloadAction<{productId: number; quantity: number}>,
    ) {
      const {productId, quantity} = action.payload;
      const itemToUpdate = state.items.find(
        item => item.productId === productId,
      );

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const {addToBasket, removeFromBasket, updateQuantity} =
  basketSlice.actions;
export default basketSlice.reducer;
