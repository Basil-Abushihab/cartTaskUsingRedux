const { User } = require("../models");
const generateToken = require("../utils/generateToken");
const hashPassword = require("../utils/hashPassword");
const verifyPassword = require("../utils/verifyPassword");

exports.registerUser = async (req, res) => {
  const userData = req.body;
  try {
    userData.password = hashPassword(userData.password);
    const user = await User.create(userData);
    const token = generateToken(user);
    const cookieOptions = {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
      sameSite: "none",
      secure: true,
    };
    res.cookie("token", token, cookieOptions);
  } catch (e) {
    res.status(501).json({ message: "Internal server error", error: e });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email: email } });
    const isVerified = verifyPassword({
      password: password,
      hashedPassword: user.password,
    });
    if (!user || !isVerified) {
      res.status(401).json({ message: "Invalid credentials" });
    } else {
      const cookieOptions = {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
        sameSite: "none",
        secure: true,
      };
      const token = generateToken(user);
      res.cookie("token", token, cookieOptions);
    }
  } catch (e) {
    res.status(501).json({ message: "Internal server error", error: e });
  }
};
