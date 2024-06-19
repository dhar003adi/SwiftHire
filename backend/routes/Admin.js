const express = require("express");
const { asyncHandler } = require("../utils/handler");
const adminController = require("../controllers/Admin");
const authenticate = require("../middleware/Authenticate");
const router = express.Router();

router.route("/adminLogin").post(asyncHandler(adminController.adminLogin));
router
  .route("/adminPost")
  .post(authenticate, asyncHandler(adminController.adminPost));

router
  .route("/editPost/:id")
  .post(authenticate, asyncHandler(adminController.editPost));

router
  .route("/deletePost/:id")
  .delete(authenticate, asyncHandler(adminController.deletePost));

router
  .route("/getPost")
  .get(authenticate, asyncHandler(adminController.getPosts));
module.exports = router;
