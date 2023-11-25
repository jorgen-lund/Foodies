import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ExtraItemProps} from '../interfaces/interfaces';

interface Order {
  id: number;
  name: string;
  price: number;
  amount: number;
  extraItems?: ExtraItemProps[];
}

const initialState: Order[] = [];

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Order>) => {
        const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
        if (existingItemIndex >= 0) {
          // Item already exists in the cart, increment its amount
          state[existingItemIndex].amount += action.payload.amount;
        } else {
          // Item does not exist in the cart, add it as a new entry
          state.push(action.payload);
        }
      },

    removeItem: (state, action: PayloadAction<number>) => {
      return state.filter(item => item.id !== action.payload);
    },

    updateItemAmount: (
      state,
      action: PayloadAction<{name: string; amount: number}>,
    ) => {
      const item = state.find(item => item.name === action.payload.name);
      if (item) {
        item.amount = action.payload.amount;
      }
    },

    clearCart: () => initialState,
  },
});

export const {addItem, removeItem, updateItemAmount, clearCart} =
  shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
