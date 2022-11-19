import express, { Router } from "express";
import {
  listProducts,
  readProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../handlers/products";
import validate from "../middlewares/validate";
import { productSchema } from "../schemas/product";

const router: Router = express.Router();

router.get("/", listProducts);

router.post("/", validate(productSchema.create), createProduct);

router.get("/:productId", readProduct);

router.put("/:productId", validate(productSchema.update), updateProduct);

router.delete("/:productId", deleteProduct);

export default router;
