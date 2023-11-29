import {configureStore} from '@reduxjs/toolkit';
import shoppingCartSlice from './shoppingCartSlice';

const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartSlice,
    
  },
});

export default store;
export type shoppingCartState = ReturnType<typeof store.getState>
