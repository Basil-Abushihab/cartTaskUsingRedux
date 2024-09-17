"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
   
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "cartUserEmail",
        targetKey: "email",
      });
    }
  }
  Cart.init(
    {
      cartUserEmail: {
        type: DataTypes.STRING,
        allowNull: false, 
        references: {
          model: "Users", 
          key: "email",
        },
      },
    },
    {
      sequelize,
      modelName: "Cart", 
    }
  );
  return Cart;
};
