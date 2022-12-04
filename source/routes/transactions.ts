import express, { Router } from "express";
import {
  listTransactions,
  createTransaction,
  readTransaction,
  updateTransaction,
  deleteTransaction,
} from "../handlers/transactions";
import validate from "../middlewares/validate";
import { transactionSchema } from "../schemas/transaction";
import authenticateMiddleware from "../middlewares/authenticate";

const router: Router = express.Router();

router.get("/", authenticateMiddleware, listTransactions);

router.post(
  "/",
  authenticateMiddleware,
  validate(transactionSchema.create),
  createTransaction
);

router.get("/:transactionId", authenticateMiddleware, readTransaction);

router.put(
  "/:transactionId",
  authenticateMiddleware,
  validate(transactionSchema.update),
  updateTransaction
);

router.delete("/:transactionId", authenticateMiddleware, deleteTransaction);

export default router;
