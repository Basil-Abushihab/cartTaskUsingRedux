import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    ADD_TO_CART: (state, action) => {
      state.cart.push(action.payload);
    },
    REMOVE_FROM_CART: (state, action) => {
      state.cart = state.cart.filter((item) => item === action.payload);
    },
    UPDATE_QTY: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QTY } = cartSlice.actions;
export default cartSlice.reducer;
