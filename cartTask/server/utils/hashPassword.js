const bcrypt = require("bcrypt");
require("dotenv").config();
const hashPassword = (password) => {
  const salt = process.env.salt;
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashPassword;
};

module.exports = hashPassword;
