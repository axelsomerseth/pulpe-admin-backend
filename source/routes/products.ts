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
import authenticateMiddleware from "../middlewares/authenticate";

const router: Router = express.Router();

router.get("/", authenticateMiddleware, listProducts);

router.post(
  "/",
  authenticateMiddleware,
  validate(productSchema.create),
  createProduct
);

router.get("/:productId", authenticateMiddleware, readProduct);

router.put(
  "/:productId",
  authenticateMiddleware,
  validate(productSchema.update),
  updateProduct
);

router.delete("/:productId", authenticateMiddleware, deleteProduct);

export default router;
