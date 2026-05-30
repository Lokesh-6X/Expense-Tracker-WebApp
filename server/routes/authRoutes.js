const express = require("express");
const router = express.Router();

const {
    registerUser,
    loginUser,
    getCurrentUser
} = require("../controllers/authController");

const validateToken = require("../middleware/validateTokenHandler");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, getCurrentUser);

module.exports = router;