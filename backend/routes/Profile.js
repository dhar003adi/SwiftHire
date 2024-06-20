const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/Authenticate");
const profilecontroller = require("../controllers/Profile");
const { asyncHandler } = require("../utils/handler");

router
  .route("/addProfile")
  .post( asyncHandler(profilecontroller.addProfile));

router
  .route("/editProfile")
  .post( asyncHandler(profilecontroller.editProfile));

router
  .route("/getProfile/:userId")
  .get(asyncHandler(profilecontroller.getProfileData));
module.exports = router;
