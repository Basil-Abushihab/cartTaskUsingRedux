import axios from "../../utils/axiosConfig";
import { FETCH_PRODUCTS, ADD_PRODUCT } from "../reducers/productsReducer";

//thunk function to fetch products
export const fetchProductsAction = () => {
  return async (dispatch, getState) => {
    const response = await axios.get("/api/products/fetchProducts");
    if (response.data.products)
      dispatch(FETCH_PRODUCTS(response.data.products));
    else dispatch(FETCH_PRODUCTS([]));
  };
};

//thunk function to add products
export const addProductAction = ({ product }) => {
  return async (dispatch, getState) => {
    const response = await axios.post("/api/products/createProduct", product);
    dispatch(ADD_PRODUCT(response.data.product));
  };
};

//thunk function to updateProduct
export const updateProductAction = ({ updatedProduct }) => {
  return async (dispatch, getState) => {
    const response = await axios.put(
      "/api/products/updateProduct",
      updatedProduct
    );
    dispatch(fetchProductsAction());
  };
};

//thunk function to deleteProduct
export const deleteProductAction = ({ deletedProduct }) => {
  return async (dispatch, getState) => {
    const response = await axios.put(
      "/api/products/deleteProduct",
      deletedProduct
    );

    dispatch(fetchProductsAction());
  };
};
