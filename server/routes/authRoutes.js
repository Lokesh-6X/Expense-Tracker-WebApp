import express from "express";

import {
  registerUser,
  loginUser,
  getCurrentUser,
} from "../controllers/authController.js";

import validateToken from "../middleware/validateTokenHandler.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", validateToken, getCurrentUser);

export default router;