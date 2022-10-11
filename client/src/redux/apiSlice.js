import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../config';

const baseQuery = fetchBaseQuery({
  baseUrl: { API_URL },
  credentials: 'include',
  prepareHeaders: (headers) => {
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
