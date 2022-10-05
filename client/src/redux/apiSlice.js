import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api' }),
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: () => '/v2',
    }),
    addProduct: builder.mutation({
      query: (todo) => ({
        url: '/todos',
        method: 'POST',
        body: todo,
      }),
    }),
  }),
});

export const { useGetPokemonsQuery } = apiSlice;
