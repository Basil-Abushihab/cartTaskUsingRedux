import { Drawer } from "@material-tailwind/react";
import axios from "axios";
import { ProductCard } from "../../components/CatalougeCard";
import { useEffect, useState, useReducer } from "react";
import { CartDrawer } from "../../components/cartDrawer";
import { useSelector } from "react-redux";

export const Catalouge = () => {
  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };
    getProducts();
  }, []);
  return (
    <div className="w-full h-full flex flex-col gap-10 justify-center items-center">
      <div className="flex w-[90%] justify-end mt-5">
        <CartDrawer></CartDrawer>
      </div>
      <div className="w-[90%] grid grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};
