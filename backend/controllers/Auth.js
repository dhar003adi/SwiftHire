const User = require("../models/Auth");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SECRET = process.env.SECRET;

const register = async (req, res) => {
  try {
    const { name, usn, password } = req.body;

    const alreadyExist = await User.findOne({ usn });

    if (alreadyExist) {
      return res
        .status(400)
        .json({ message: "Already Registered", success: true });
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
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { usn, password } = req.body;

    const user = await User.findOne({ usn });

    if (!user) {
      return res
        .status(404)
        .json({ message: "User does not exist Register Please" });
    }

    const isValidPass = await bcrypt.compare(password, user.password);
    console.log(isValidPass);
    if (!isValidPass) {
      return res.status(401).json({ message: "Unauthorized access" });
    }

    const token = jwt.sign({ id: user.id }, SECRET);

    res
      .status(200)
      .json({ message: "Login Successfull", success: true, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { register, login };
