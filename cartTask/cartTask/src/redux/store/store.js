import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartReducer";
import productReducer from "../reducers/productsReducer";
import { thunk } from "redux-thunk";
export default configureStore({
  reducer: { cart: cartReducer, product: productReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
