const express = require("express");
const router = express.Router();

const {
    getDashboardSummary,
    getMonthlySummary,
    getCategorySummary,
    getRecentExpenses
} = require("../controllers/dashboardController");

const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);

router.get("/", getDashboardSummary);

router.get("/monthly-summary", getMonthlySummary);

router.get("/category-summary", getCategorySummary);

router.get("/recent-expenses", getRecentExpenses);

module.exports = router;