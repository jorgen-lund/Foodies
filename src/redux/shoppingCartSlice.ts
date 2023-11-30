import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import { ExtraItemProps } from '../interfaces/boothComponentInterfaces';

export interface OrderItem {
  id: number;
  name: string;
  price: number;
  amount: number;
  extraItems?: ExtraItemProps[];
}

type ShoppingCartState = OrderItem[];
const initialState: ShoppingCartState = [];

/** Redux reducer with the actions addItem, that adds a dish to the 
 * shoppingCart. Checks if there already is one of these dishes, inside
 * and if, increments the amount instead. 
 * Also has the possiblity to remove an item, increment the amount, or 
 * decrement the amount. Lastly, an action that clears the entire shoppingCart.
*/
export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<OrderItem>) => {
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

    decrementItem: (state, action: PayloadAction<{id: number}>) => {
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
