const mongoose = require("mongoose");
const { Schema } = mongoose;

const userProfile = new Schema({
  userId: {
    type:String,
    required:true,
  },

  name: {
    type: String,
    required: true,
  },

  usn: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },
  sem:{
    type:String,
    required:true,
  },
  cgpa: {
    type: String,
    required: true,
  },

  backlogs: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Profile", userProfile);
