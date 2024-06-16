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

const adminPost = async (req, res) => {
  const {
    companyname,
    aboutCompany,
    jobdescription,
    branches,
    ctc,
    skillreq,
    noOfRounds,
  } = req.body;

  if (
    !companyname ||
    !aboutCompany ||
    !jobdescription ||
    !branches ||
    !ctc ||
    !skillreq ||
    !noOfRounds
  ) {
    throw new AppError({
      name: "BAD_REQUEST",
      message: "All Feilds are not mentioned",
    });
  }

  const newPost = await Admin.create({
    companyname,
    aboutCompany,
    jobdescription,
    branches,
    ctc,
    skillreq,
    noOfRounds,
  });

  res.status(200).json({
    message: "New Job Posted By Admin Successfully",
    newPost: newPost,
    success: true,
  });
};

const editPost = async (req, res) => {
  const {
    companyname,
    aboutCompany,
    jobdescription,
    branches,
    ctc,
    skillreq,
    noOfRounds,
  } = req.body;
  const postId = req.params.id;

  const editPost = {};
  if (companyname) {
    editPost.companyname = companyname;
  }
  if (aboutCompany) {
    editPost.aboutCompany = aboutCompany;
  }
  if (jobdescription) {
    editPost.jobdescription = jobdescription;
  }
  if (branches) {
    editPost.branches = branches;
  }
  if (ctc) {
    editPost.ctc = ctc;
  }
  if (skillreq) {
    editPost.skillreq = skillreq;
  }
  if (noOfRounds) {
    editPost.noOfRounds = noOfRounds;
  }

  let post = await Admin.findOne({ postId });
  if (!post) {
    throw new AppError({
      name: "NOT_FOUND",
      message: "Job Posting Not Found",
    });
  }

  post = await Admin.findByIdAndUpdate(
    { id: postId },
    { $set: editPost },
    { new: true }
  );

  res
    .status(201)
    .json({ message: "Post edited Successfully", post: post, success: true });
};

const deletePost = async (req, res) => {
  const postId = req.params.id;

  const post = await Admin.findOne({ postId });
  if (!post) {
    throw new AppError({
      name: "NOT_FOUND",
      message: "Post Not Found",
    });
  }

  const delPost = await Admin.findByIdAndDelete({ postId });
  res
    .status(200)
    .json({ message: "Post deleted successfully", delPost, success: true });
};

module.exports = { adminLogin, adminPost, editPost, deletePost };
