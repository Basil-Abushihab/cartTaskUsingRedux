import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchProductsAction } from "../redux/thunks/productOps";
export const useProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Product);
  const fetchProducts = () => {
    dispatch(fetchProductsAction());
  };


  const addProduct=({product})=>{

  }

  return { products, fetchProducts,addProduct };
};
