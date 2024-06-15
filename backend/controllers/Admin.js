const Admin = require("../models/Admin");
const AppError = require("../utils/error");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new AppError({
      name: "BAD_REQUEST",
      message: "Credentails not filled",
    });
  }

  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASS
  ) {
    throw new AppError({
      name: "UNAUTHORISED",
      message: "inccorect credentials",
    });
  }

  const token = jwt.sign({ id: id }, SECRET_KEY);

  res
    .status(200)
    .json({ message: "Admin Login Successfull", token: token, success: true });
};

export const adminPost = async (req, res) => {
  const { companyname, aboutcompany, ctc, skillreq, noOfRounds } = req.body;

  if (!companyname || !aboutcompany || !ctc || !skillreq || !noOfRounds) {
    throw new AppError({
      name: "BAD_REQUEST",
      message: "Required Information not specified",
    });
  }

  const postedInfo = await Admin.create({
    companyname: companyname,
    aboutCompany: aboutcompany,
    ctc: ctc,
    skillreq: skillreq,
    noOfRounds: noOfRounds,
  });

  res
    .status(200)
    .json({ message: "Admin Post successfull", postedInfo, success: true });
};

export const EditPost = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  const post = await Admin.findOne({ id: id });

  if (!post) {
    throw new AppError({
      name: "NOT_FOUND",
      message: "Post Not Found",
    });
  }
};
