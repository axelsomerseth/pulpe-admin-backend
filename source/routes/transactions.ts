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

const router: Router = express.Router();

router.get("/", listTransactions);

router.post("/", validate(transactionSchema.create), createTransaction);

router.get("/:transactionId", readTransaction);

router.put(
  "/:transactionId",
  validate(transactionSchema.update),
  updateTransaction
);

router.delete("/:transactionId", deleteTransaction);

export default router;
