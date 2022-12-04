import express, { Router } from "express";
import {
  listCategories,
  importCategories,
  readCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../handlers/categories";
import authenticateMiddleware from "../middlewares/authenticate";
import validate from "../middlewares/validate";
import { categorySchema } from "../schemas/category";

const router: Router = express.Router();

router.get("/", authenticateMiddleware, listCategories);

router.post(
  "/import",
  authenticateMiddleware,
  validate(categorySchema.import),
  importCategories
);

router.post(
  "/",
  authenticateMiddleware,
  validate(categorySchema.create),
  createCategory
);

router.get("/:categoryId", authenticateMiddleware, readCategory);

router.put(
  "/:categoryId",
  authenticateMiddleware,
  validate(categorySchema.update),
  updateCategory
);

router.delete("/:categoryId", authenticateMiddleware, deleteCategory);

export default router;
