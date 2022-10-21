import express, { Router } from "express";
import {
  listCategories,
  readCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../handlers/categories";
import validate from "../middlewares/validate";
import { categorySchema } from "../schemas/categorySchema";

const router: Router = express.Router();

router.get("/", listCategories);

router.get("/:categoryId", readCategory);

router.post("/", validate(categorySchema.create), createCategory);

router.put("/:categoryId", validate(categorySchema.update), updateCategory);

router.delete("/:categoryId", deleteCategory);

export default router;
