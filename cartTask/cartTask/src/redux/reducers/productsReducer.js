import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [] };
export const productSlice = createSlice({
  name: "Product",
  initialState: initialState,
  reducers: {
    FETCH_PRODUCTS: (state, action) => {
      state.products = action.payload;
    },
    ADD_PRODUCT: (state, action) => {
      const products = state.products;
      state.products = [...products, action.payload];
    },
  },
});

export const { FETCH_PRODUCTS, ADD_PRODUCT } = productSlice.actions;
export default productSlice.reducer;
