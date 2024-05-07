const User = require("../models/Auth");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { AppError } = require("../utils/error");
const HttpStatus = require("../utils/statusCodes");
const SECRET = process.env.SECRET;

const register = async (req, res) => {
  const { name, usn, password } = req.body;

  const alreadyExist = await User.findOne({ usn });

  if (alreadyExist) {
    throw new AppError({
      name: "BAD_REQUEST",
      message: "User Already Exists",
    });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    name: name,
    usn: usn,
    password: hashedPassword,
  });

  const token = jwt.sign({ id: newUser.id }, SECRET);

  res
    .status(200)
    .json({ message: "User Registered", success: true, token: token });

  throw new AppError({
    name: "INTERNAL_SERVER_ERROR",
    message: "Registration unsuccessfull",
  });
};

const login = async (req, res) => {
  try {
    const { usn, password } = req.body;

    const user = await User.findOne({ usn });

    if (!user) {
      throw new AppError({
        name: "NOT_FOUND",
        message: "User not found",
      });
    }

    const isValidPass = await bcrypt.compare(password, user.password);
    console.log(isValidPass);
    if (!isValidPass) {
      return res.status(401).json({ message: "Unauthorized access" });
    }

    const token = jwt.sign({ id: user.id }, SECRET);

    res
      .status(HttpStatus.OK)
      .json({ message: "Login Successfull", success: true, token: token });
  } catch (error) {
    console.log(error);
    res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error" });
  }
};

module.exports = { register, login };
