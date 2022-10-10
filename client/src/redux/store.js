import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './productsRedux';
import { apiSlice } from './apiSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    products: productsReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
