import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersRedux';
import productsReducer from './productsRedux';
import { apiSlice } from './apiSlice';
import authReducer from './authSlice';
const store = configureStore({
  reducer: {
    products: productsReducer,
    users: usersReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
