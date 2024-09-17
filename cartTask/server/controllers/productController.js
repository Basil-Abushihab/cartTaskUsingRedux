const { products } = require("../models");
const products = require("../models/products");

exports.createProduct = async (req, res) => {
  const product = req.body;
  try {
    const newProduct = await products.create(product);
    res
      .status(201)
      .json({ message: "Product created successfully", product: newProduct });
  } catch (e) {
    res.status(501).json({ message: "Internal server error", error: e });
  }
};

exports.updateProduct = async (req, res) => {
  const updatedProduct = req.body;
  try {
    await products.update(updatedProduct, {
      where: { productID: updatedProduct.productID },
    });
    res.status(201).json({
      message: "Product successfully updated",
      product: updatedProduct,
    });
  } catch (e) {
    res.status(501).json({ message: "Internal server error", error: e });
  }
};

exports.deleteProduct = async (req, res) => {
  const deletedProduct = req.body;
  try {
    deletedProduct.isDeleted = true;
    await products.update(deletedProduct, {
      where: { productID: deletedProduct.productID },
    });
    res.status(201).json({
      message: "Product successfully deleted",
      product: deletedProduct,
    });
  } catch (e) {
    res.status(501).json({ message: "Internal server error", error: e });
  }
};

exports.fetchProducts = async (req, res) => {
  try {
    const fetchedProducts = await products.findAll();
    if (!products) {
      res.status(204).json({ message: "No products where found" });
    } else {
      res.status(200).json({
        message: "products fetched successfully ",
        products: fetchedProducts,
      });
    }
  } catch (e) {}
};
