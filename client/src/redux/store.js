import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import usersReducer from './usersRedux';
import productsReducer from './productsRedux';
import { apiSlice } from './apiSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    users: usersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
