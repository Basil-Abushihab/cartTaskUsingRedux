import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
  Typography,
} from "@material-tailwind/react";

export const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardHeader>
        <img className="w-full object-cover " src={product.image} alt="" />
      </CardHeader>
      <CardBody className="flex flex-col">
        <Typography variant="h3">ID:{product.id}</Typography>
        <Typography variant="h3">Title:{product.title}</Typography>
        <Typography variant="h3">Price:{product.price}</Typography>
        <Typography variant="h3">category:{product.category}</Typography>
        <Typography variant="h3">description: {product.description}</Typography>
      </CardBody>
      <CardFooter>
        <Button variant="filled">ADD To Cart</Button>
      </CardFooter>
    </Card>
  );
};
