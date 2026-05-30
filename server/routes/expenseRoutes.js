const express = require("express");
const router = express.Router();

const {
    createExpense,
    getExpenses,
    getExpense,
    updateExpense,
    deleteExpense
} = require("../controllers/expenseController");

const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);

router
    .route("/")
    .post(createExpense)
    .get(getExpenses);

router
    .route("/:id")
    .get(getExpense)
    .put(updateExpense)
    .delete(deleteExpense);

module.exports = router;