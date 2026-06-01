import express from "express";

import {
  getDashboardSummary,
  getMonthlySummary,
  getCategorySummary,
  getRecentExpenses,
} from "../controllers/dashboardController.js";

import validateToken from "../middleware/validateTokenHandler.js";

const router = express.Router();

router.use(validateToken);

router.get("/", getDashboardSummary);
router.get("/monthly-summary", getMonthlySummary);
router.get("/category-summary", getCategorySummary);
router.get("/recent-expenses", getRecentExpenses);

export default router;