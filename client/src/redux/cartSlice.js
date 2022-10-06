import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';

const cartAdapter = createEntityAdapter();

const initialState = cartAdapter.getInitialState();

export const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => '/cart',
      transformResponse: (responseData) => {
        return cartAdapter.setAll(initialState, responseData);
      },
      providesTags: (result, error, arg) => [
        { type: 'Cart', id: 'LIST' },
        ...result.ids.map((id) => ({ type: 'Cart', id: 'LIST' })),
      ],
    }),
    addCartItem: builder.mutation({
      query: (initialProduct) => ({
        url: '/cart',
        method: 'POST',
        body: {
          ...initialProduct,
        },
      }),
      invalidatesTags: [{ type: 'Cart', id: 'LIST' }],
    }),
    updateCart: builder.mutation({
      query: (initialCart) => ({
        url: `/cart/${initialCart.id}`,
        method: 'PUT',
        body: { quantity: initialCart.quantity },
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Cart', id: arg.id }],
    }),
    deleteCartItem: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: 'DELETE',
        body: id,
        invalidatesTags: [{ type: 'Cart', id: 'LIST' }],
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
