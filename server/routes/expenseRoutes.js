import express from "express";
const router = express.Router();

import {
  createExpense,
  getExpenses,
  getExpense,
  updateExpense,
  deleteExpense,
} from "../controllers/expenseController.js";

import validateToken from "../middleware/validateTokenHandler.js";

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

export default router;