import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cartSlice';
import usersReducer from './usersRedux';
import productsReducer from './productsRedux';
import { apiSlice } from './apiSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    products: productsReducer,
    cart: cartReducer,
    users: usersReducer,
  },
  middleware: (customizedMiddleware) =>
    customizedMiddleware({
      serializableCheck: false,
    }),
});

export default store;
