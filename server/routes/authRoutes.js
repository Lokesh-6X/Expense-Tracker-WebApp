const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getUser } = require("../controllers/authController");
const validateToken = require("../middleware/validateTokenHandler");
const { get } = require("mongoose");

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.get("/current", validateToken, getUser);

module.exports = router;