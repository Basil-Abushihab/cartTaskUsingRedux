import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../reducers/cartReducer";
export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <CardBody className="flex flex-col">
        <img
          className="w-full h-[20rem] object-cover  "
          src={product.image}
          alt=""
        />

        <Typography variant="h5">Title:{product.title}</Typography>
        <Typography variant="h5">Price:{product.price}</Typography>
        <Typography variant="h5">category:{product.category}</Typography>
      </CardBody>
      <CardFooter className="flex justify-end items-end h-full ">
        <Button
          onClick={() => {
            dispatch(ADD_TO_CART(product));
          }}
          variant="filled"
        >
          ADD To Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
