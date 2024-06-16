const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/Authenticate");
const profilecontroller = require("../controllers/Profile");
const { asyncHandler } = require("../utils/handler");

router
  .route("/addProfile")
  .post(authenticate, asyncHandler(profilecontroller.addProfile));

router
  .route("/editProfile")
  .post(authenticate, asyncHandler(profilecontroller.editProfile));

router
  .route("/getProfile")
  .get(authenticate, asyncHandler(profilecontroller.getProfileData));
module.exports = router;
