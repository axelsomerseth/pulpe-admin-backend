import express, { Router } from "express";
import {
  listCategories,
  importCategories,
  readCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../handlers/categories";
import validate from "../middlewares/validate";
import { categorySchema } from "../schemas/category";

const router: Router = express.Router();

router.get("/", listCategories);

router.post("/import", validate(categorySchema.import), importCategories);

router.post("/", validate(categorySchema.create), createCategory);

router.get("/:categoryId", readCategory);

router.put("/:categoryId", validate(categorySchema.update), updateCategory);

router.delete("/:categoryId", deleteCategory);

export default router;
