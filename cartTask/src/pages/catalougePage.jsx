import { Card, CardBody, CardFooter, Button } from "@material-tailwind/react";
import axios from "axios";
import { ProductCard } from "../components/CatalougeCard";
import { useEffect, useState, useReducer } from "react";

export const Catalouge = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };
    getProducts();
  });
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[90%] grid grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};
