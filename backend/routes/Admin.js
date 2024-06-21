const express = require("express");
const { asyncHandler } = require("../utils/handler");
const adminController = require("../controllers/Admin");
const authenticate = require("../middleware/Authenticate");
const router = express.Router();

router.route("/adminLogin").post(asyncHandler(adminController.adminLogin));
router.route("/adminPost").post(asyncHandler(adminController.adminPost));

router.route("/editPost/:id").post(asyncHandler(adminController.editPost));

router
  .route("/deletePost/:id")
  .delete(asyncHandler(adminController.deletePost));

router.route("/getPost").get(asyncHandler(adminController.getPosts));
module.exports = router;
