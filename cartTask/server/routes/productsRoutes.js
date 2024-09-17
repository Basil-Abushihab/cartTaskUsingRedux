const express = require("express");
const {
  createProduct,
  deleteProduct,
  fetchProducts,
  updateProduct,
} = require("../controllers/productController");
const router = express.Router();

router.get("/fetchProducts", fetchProducts);
router.post("/createProduct", createProduct);
router.put("/updateProduct", updateProduct);
router.put("/deleteProduct", deleteProduct);

module.exports=router