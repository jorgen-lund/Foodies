import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ExtraItemProps} from '../interfaces/interfaces';
import {shoppingCartState} from './store';

export interface Order {
  id: number;
  name: string;
  price: number;
  amount: number;
  extraItems?: ExtraItemProps[];
}

type ShoppingCartState = Order[];
const initialState: ShoppingCartState = [];

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Order>) => {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        const basePrice = state[itemIndex].price / state[itemIndex].amount;

        state[itemIndex].amount += action.payload.amount;
        state[itemIndex].price = basePrice * state[itemIndex].amount;
      } else {
        state.push(action.payload);
      }
    },

    removeItem: (state, action: PayloadAction<{id: number}>) => {
      return state.filter(item => item.id !== action.payload.id);
    },

    incrementItem: (state, action: PayloadAction<{id: number}>) => {
      const item = state.find(item => item.id === action.payload.id);
      if (item) {
        item.amount += 1;
        item.price = (item.price / (item.amount - 1)) * item.amount;
      }
    },

    decrementItem: (state, action: PayloadAction<{ id: number }>) => {
      const item = state.find(item => item.id === action.payload.id);
      if (item && item.amount > 1) {
        item.amount -= 1;
        item.price = (item.price / (item.amount + 1)) * item.amount;
      }
    },

    clearCart: () => initialState,
  },
});

export const {addItem, removeItem, incrementItem, decrementItem, clearCart} =
  shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
