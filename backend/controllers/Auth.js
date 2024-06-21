const User = require("../models/Auth");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const AppError = require("../utils/error");
const SECRET = process.env.SECRET;

const register = async (req, res) => {
  const { password, email } = req.body;
  let alrex = false;
  if (!password || !email) {
    throw new AppError({
      name: "NOT_FOUND",
      message: "Credentials Not Found",
    });
  }

  const alredyExist = await User.findOne({ email });
  if (alredyExist) {
    return res.status(400).json({
      message: "User already exists",
      alrex: true,
      success: false,
    });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    email,
    password: hashedPass,
  });

  const token = jwt.sign({ id: newUser.id }, SECRET);

  res
    .status(200)
    .json({ message: "New User Registered", token: token, success: true });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  let dne = false;
  const userExist = await User.findOne({ email });

  if (!userExist) {
    return res
      .status(404)
      .json({ message: "User Does Not Exist", success: false, dne: true });
  }

  const isValidPass = await bcrypt.compare(password, userExist.password);

  if (!isValidPass) {
    throw new AppError({
      name: "UNAUTHORIZED",
      message: "Invalid Password",
    });
  }

  const token = jwt.sign({ id: userExist.id }, SECRET);

  res.status(200).json({
    message: "Login Successfull",
    token: token,
    success: true,
  });
};

module.exports = { register, login };
