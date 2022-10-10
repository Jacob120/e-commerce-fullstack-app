import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logOut, setCredentials } from './authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000/api',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = sessionStorage.getItem('accessToken');
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  tagTypes: ['Products', 'Cart', 'Order'],
  endpoints: (builder) => ({}),
});
