const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (user) => {
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign(user, secret);
  return token;
};

module.exports=generateToken;