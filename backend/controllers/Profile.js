const Profile = require("../models/Profile");
const AppError = require("../utils/error");

const addProfile = async (req, res) => {
  const { name, usn, email, phone, sem, cgpa, backlogs } = req.body;

const userId=1;
  try {
    const newUser = await Profile.create({userId, name, usn, email, phone, sem, cgpa, backlogs });

    res.status(200).json({ message: "Profile Information added", success: true, newUser });
  } catch (err) {
    res.status(500).send(err);
  }
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
  const userId = req.params.userId;
  console.log(userId)

  try {
    const profile = await Profile.findOne({ userId });
    if (!profile) {
      return res.status(404).json({ message: "Profile Not Found" });
    }
    res.status(200).json({ message: "Profile Retrieved", profile, success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = { addProfile, editProfile, getProfileData };
