const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSchema = new Schema({
  companyname: {
    type: String,
    required: true,
  },

  aboutCompany: {
    type: String,
    required: true,
  },

  jobdescription: {
    type: String,
    required: true,
  },

  branches: {
    type: String,
    required: true,
  },

  ctc: {
    type: String,
    required: true,
  },

  skillreq: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Admin", adminSchema);
