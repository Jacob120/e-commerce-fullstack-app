import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';

const cartAdapter = createEntityAdapter();

const initialState = cartAdapter.getInitialState();

export const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => '/cart',

      providesTags: (result, error, arg) => ['Cart'],
    }),
    addCartItem: builder.mutation({
      query: (initialProduct) => ({
        url: '/cart',
        method: 'POST',
        body: {
          ...initialProduct,
        },
      }),
      invalidatesTags: ['Cart'],
    }),
    updateCart: builder.mutation({
      query: (initialCart) => ({
        url: `/cart/${initialCart.id}`,
        method: 'PUT',
        body: {
          quantity: initialCart.quantity >= 1 ? initialCart.quantity : 1,
        },
      }),
      invalidatesTags: ['Cart'],
    }),
    deleteCartItem: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: 'DELETE',
        body: id,
        invalidatesTags: ['Cart'],
      }),
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddCartItemMutation,
  useDeleteCartItemMutation,
  useUpdateCartMutation,
} = cartApiSlice;

// returns the query result object
export const selectCartResult = cartApiSlice.endpoints.getCart.select();

// Creates memoized selector
const selectCartData = createSelector(
  selectCartResult,
  (cartResult) => cartResult.data, // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllCart,
  selectById: selectCartById,
  selectIds: selectCartIds,
  // Pass in a selector that returns the posts slice of state
} = cartAdapter.getSelectors((state) => selectCartData(state) ?? initialState);
