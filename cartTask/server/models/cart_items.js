"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cart_items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cart_items.init(
    {
      cartID: {
        type: DataTypes.INTEGER,
        references: { key: "cartID", model: "Cart" },
      },
      productID: {
        type: DataTypes.INTEGER,
        references: { model: "products", key: "productID" },
      },
    },
    {
      sequelize,
      modelName: "cart_items",
    }
  );
  return cart_items;
};
