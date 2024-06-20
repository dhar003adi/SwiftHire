const Profile = require("../models/Profile");
const AppError = require("../utils/error");

const addProfile = async (req, res) => {
  const userId = req.user.id;
  const { name, usn, address, phonenumber, sem, cgpa, currentBacklogs } =
    req.body;

  const newUser = await Profile.create({
    userId: userId,
    name,
    usn,
    address,
    phonenumber,
    sem,
    cgpa,
    currentBacklogs,
  });

  res
    .status(200)
    .json({ message: "Profile Information added", success: true, newUser });
};

const editProfile = async (req, res) => {
  const { name, usn, address, phonenumber, sem, cgpa, currentBacklogs } =
    req.body;
  const userId = req.user.id;

  const edittedUser = {};

  if (name) {
    edittedUser.name = name;
  }
  if (usn) {
    edittedUser.usn = usn;
  }
  if (address) {
    edittedUser.address = address;
  }
  if (phonenumber) {
    edittedUser.phonenumber = phonenumber;
  }
  if (sem) {
    edittedUser.sem = sem;
  }
  if (cgpa) {
    edittedUser.cgpa = cgpa;
  }
  if (currentBacklogs) {
    edittedUser.currentBacklogs = currentBacklogs;
  }

  let profile = await Profile.findOne({ userId });
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

  profile = await Profile.findOneAndUpdate(
    { userId },
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
