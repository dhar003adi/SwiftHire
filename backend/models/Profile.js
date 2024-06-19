const mongoose = require("mongoose");
const { Schema } = mongoose;

const userProfile = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  usn: {
    type: String,
    require: true,
  },

  address: {
    type: String,
    required: true,
  },

  phonenumber: {
    type: String,
    required: true,
  },

  sem: {
    type: String,
    required: true,
  },

  cgpa: {
    type: String,
    required: true,
  },

  currentBacklogs: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Profile", userProfile);
