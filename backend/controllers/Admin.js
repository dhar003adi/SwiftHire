const Admin = require("../models/Admin");
const AppError = require("../utils/error");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new AppError({
      name: "BAD_REQUEST",
      message: "Credentials have not been specified",
    });
  }

  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASS
  ) {
    throw new AppError({
      name: "UNAUTHORIZED",
      message: "Invalid Credentails",
    });
  }

  const token = jwt.sign({ email: process.env.ADMIN_EMAIL }, SECRET);

  res
    .status(200)
    .json({ message: "Admin Login Successfull", token: token, success: true });
};

module.exports = { adminLogin };
