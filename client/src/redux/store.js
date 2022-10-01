import { configureStore } from '@reduxjs/toolkit';
import initialState from './initialState';
import cartReducer from './cartRedux';
import usersReducer from './usersRedux';
import productsReducer from './productsRedux';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    users: usersReducer,
  },
  initialState,
  middleware: (customizedMiddleware) =>
    customizedMiddleware({
      serializableCheck: false,
    }),
});

export default store;
