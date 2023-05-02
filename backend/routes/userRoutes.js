const express = require("express");
const {registeruser, authUser,updateUserProfile} = require('../controllers/userControllers')

const { protect } = require("../middlewares/authMiddleware.js");
const router = express.Router();

router.route("/").post(registeruser);
router.route("/login").post(authUser);
router.route("/profile").post(protect, updateUserProfile);

// router.route("/profile").post(protect, updateUserProfile);

module.exports = router;
