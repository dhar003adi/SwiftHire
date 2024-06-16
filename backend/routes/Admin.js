const express = require("express");
const { asyncHandler } = require("../utils/handler");
const adminController = require("../controllers/Admin");
const router = express.Router();

router.route("/adminLogin").post(asyncHandler(adminController.adminLogin));

module.exports = router;
