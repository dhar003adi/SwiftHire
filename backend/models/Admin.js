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

  branches: {
    type: String,
    required: true,
    enum: Object.values(branchEnums),
  },

  ctc: {
    type: String,
    required: true,
  },

  skillreq: {
    type: String,
    required: true,
  },

  noOfRounds: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Admin", adminSchema);
