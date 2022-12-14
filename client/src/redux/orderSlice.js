import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';

const orderAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.createdDate.localeCompare(a.createdDate),
});

const initialState = orderAdapter.getInitialState();

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrder: builder.query({
      query: () => '/order',
      transformResponse: (responseData) => {
        return orderAdapter.setAll(initialState, responseData);
      },
      providesTags: ['Order'],
    }),
    addOrder: builder.mutation({
      query: (initialOrder) => ({
        url: '/order',
        method: 'POST',
        body: { ...initialOrder },
      }),
      invalidatesTags: ['Order'],
    }),
  }),
});

export const { useGetOrderQuery, useAddOrderMutation } = orderApiSlice;

// returns the query result object
export const selectOrderResult = orderApiSlice.endpoints.getOrder.select();

// Creates memoized selector
const selectOrderData = createSelector(
  selectOrderResult,
  (orderResult) => orderResult.data, // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllOrder,
  selectById: selectOrderById,
  selectIds: selectOrderIds,
  // Pass in a selector that returns the posts slice of state
} = orderAdapter.getSelectors(
  (state) => selectOrderData(state) ?? initialState,
);
