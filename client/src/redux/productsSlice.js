import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';

const productsAdapter = createEntityAdapter();

const initialState = productsAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
      providesTags: ['Products'],
    }),
    getProductsById: builder.query({
      query: (productId) => `/products/${productId}`,
    }),
    addNewProduct: builder.mutation({
      query: (initialProduct) => ({
        url: '/products',
        method: 'POST',
        body: { ...initialProduct },
      }),
      invalidatesTags: [{ type: 'Products', id: 'LIST' }],
    }),
    updateProduct: builder.mutation({
      query: (initialProduct) => ({
        url: `/products/${initialProduct.id}`,
        method: 'PUT',
        body: {
          ...initialProduct,
          updatedAt: new Date().toISOString(),
        },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'Products', id: arg.id },
      ],
    }),
    deleteProduct: builder.mutation({
      query: ({ id }) => ({
        url: `/products/${id}`,
        method: 'DELETE',
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'Products', id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByIdQuery,
  useAddNewProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = extendedApiSlice;

// returns the query result object
export const selectProductsResult =
  extendedApiSlice.endpoints.getProducts.select();

// creates memoized selector
const selectProductData = createSelector(
  selectProductsResult,
  (productsResult) => productsResult.data, // normalized state object with ids & entities
);

// selectors
export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds: selectProductIds,
} = productsAdapter.getSelectors(
  (state) => selectProductData(state) ?? initialState,
);
