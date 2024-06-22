const Profile = require("../models/Profile");
const AppError = require("../utils/error");

const addProfile = async (req, res) => {
  const userId = req.user.id;
  const { name, usn, email, phone, sem, cgpa, backlogs } = req.body;
  console.log(req.body);

  try {
    const newUser = await Profile.create({
      userId: userId,
      name,
      usn,
      email,
      phone,
      sem,
      cgpa,
      backlogs,
    });

    console.log(newUser);

    res
      .status(200)
      .json({ message: "Profile Information added", success: true, newUser });
  } catch (err) {
    res.status(500).send(err);
  }
};

const editProfile = async (req, res) => {
  const { name, usn, email, phone, sem, cgpa,backlogs } =
    req.body;
  const userId = req.user.id;

  const edittedUser = {};

  if (name) {
    edittedUser.name = name;
  }
  if (usn) {
    edittedUser.usn = usn;
  }
  if (email) {
    edittedUser.email = email;
  }
  if (phone) {
    edittedUser.phone = phone;
  }
  if (sem) {
    edittedUser.sem = sem;
  }
  if (cgpa) {
    edittedUser.cgpa = cgpa;
  }
  if (backlogs) {
    edittedUser.backlogs = backlogs;
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
