import express from "express";

import {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";

import validateToken from "../middleware/validateTokenHandler.js";

const router = express.Router();

router.use(validateToken);

router
  .route("/")
  .post(createCategory)
  .get(getCategories);

router
  .route("/:id")
  .put(updateCategory)
  .delete(deleteCategory);

export default router;