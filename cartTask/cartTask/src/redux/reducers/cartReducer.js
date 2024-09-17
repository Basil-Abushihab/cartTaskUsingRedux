import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: {} },
  reducers: {
    ADD_TO_CART: (state, action) => {
      if (!state.cart[action.payload.id]) {
        state.cart[action.payload.id] = action.payload;
      } else {
        if (state.cart[action.payload.id].quantity === undefined)
          state.cart[action.payload.id].quantity = 0;

        state.cart[action.payload.id].quantity++;
      }
    },
    INCREASE_QUANTITY: (state, action) => {
      state.cart[action.payload.id].quantity++;
    },

    DECREASE_QUANTITY: (state, action) => {
      if (state.cart[action.payload.id].quantity === 1) {
        delete state.cart[action.payload.id];
      } else {
        state.cart[action.payload.id].quantity--;
      }
    },
  },
});

export const { ADD_TO_CART, REMOVE_FROM_CART } = cartSlice.actions;
export default cartSlice.reducer;
