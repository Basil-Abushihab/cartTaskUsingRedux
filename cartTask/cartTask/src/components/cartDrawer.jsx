import {
  Button,
  Drawer,
  IconButton,
  CardBody,
  Card,
  Typography,
} from "@material-tailwind/react";
import QuantityCounter from "./quantity-counter ";
import { NumberInput } from "@mui/base/Unstable_NumberInput/NumberInput";
import * as React from "react";
import { useState } from "react";
export const CartDrawer = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <IconButton onClick={openDrawer} />
      <Drawer
        open={open}
        placement="right"
        onClose={closeDrawer}
        className="p-4"
      >
        <div className="flex flex-col gap-5">
          <Typography variant="h3">Cart</Typography>
          <Card>
            <CardBody className="flex flex-col gap-5">
              <div className="flex gap-5 items-center">
                <img className="w-[2rem] h-[2rem]" src="" alt="" />
                <Typography variant="h5">Title</Typography>
              </div>
              <QuantityCounter></QuantityCounter>
            </CardBody>
          </Card>
        </div>
      </Drawer>
    </>
  );
};
