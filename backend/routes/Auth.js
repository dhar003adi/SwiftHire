const express = require("express");
const authController = require("../controllers/Auth");
const { asyncHandler } = require("../utils/handler");

const router = express.Router();

router.route("/register").post(asyncHandler(authController.register));
router.route("/login").post(asyncHandler(authController.login));

module.exports = router;
