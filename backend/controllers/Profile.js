const mongoose = require("mongoose");
const Profile = require("../models/Profile");
const AppError = require("../utils/error");
const { findByIdAndUpdate } = require("../models/Auth");

const addProfile = async (req, res) => {
  const userId = req.user.id;
  const { usn, address, about, cgpa, currentBacklogs } = req.body;

  const newUser = await Profile.create({
    userId: userId,
    usn,
    address,
    cgpa,
    about,
    currentBacklogs,
  });

  res
    .status(200)
    .json({ message: "Profile Information added", success: true, newUser });
};

const editProfile = async (req, res) => {
  const { usn, address, about, cgpa, currentBacklogs } = req.body;
  const userId = req.user.id;

  const edittedUser = {};

  if (usn) {
    edittedUser.usn = usn;
  }
  if (address) {
    edittedUser.address = address;
  }
  if (about) {
    edittedUser.about = about;
  }
  if (cgpa) {
    edittedUser.cgpa = cgpa;
  }
  if (currentBacklogs) {
    edittedUser.currentBacklogs = currentBacklogs;
  }

  const profile = await Profile.findOne({ userId });
  if (!profile) {
    throw new AppError({
      name: "NOT_FOUND",
      message: "Profile Not Added",
    });
  }

  if (profile.userId.toString() !== userId) {
    throw new AppError({
      name: "UNAUTHORISED",
      message: "Unauthorised access",
    });
  }

  profile = await findByIdAndUpdate(
    userId,
    { $set: edittedUser },
    { new: true }
  );

  res.status(201).json({ message: "Profile Updated Successfully", profile });
};

const getProfileData = async (req, res) => {
  const userId = req.user.id;

  const profile = await Profile.findOne({ userId });
  if (!profile) {
    throw new AppError({
      name: "NOT_FOUND",
      message: "Profile Not Found",
    });
  }
  res
    .status(200)
    .json({ message: "Profile Retreived", profile, success: true });
};

module.exports = { addProfile, editProfile, getProfileData };
