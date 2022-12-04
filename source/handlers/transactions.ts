import { RequestHandler, Request, Response } from "express";
import { Transaction } from "../db/entities/transactions";
import {
  findTransactions,
  addTransaction,
  findTransactionById,
  editTransaction,
  removeTransaction,
} from "../repository/transactions";

// Inventory Transactions

const listTransactions: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const list = await findTransactions();
  res.status(200);
  res.send({
    page: 1,
    // size: list.length,
    data: list,
  });
};

const createTransaction: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const newTransaction = new Transaction(
    req.body?.productId,
    req.body?.movement,
    req.body?.quantity,
    req.body?.type,
    req.body?.description
  );
  const created = await addTransaction(newTransaction);
  if (created?.id) {
    res.status(201);
    res.send(created);
  } else {
    res.sendStatus(500);
  }
};

const readTransaction: RequestHandler = async (req: Request, res: Response) => {
  const transactionId = req.params?.transactionId as unknown as number;
  const found = await findTransactionById(transactionId);
  if (found) {
    res.status(200);
    res.send(found);
  } else {
    res.sendStatus(404);
  }
};

const updateTransaction: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const editedTransaction = new Transaction(
    req.body?.productId,
    req.body?.movement,
    req.body?.quantity,
    req.body?.type,
    req.body?.description
  );
  editedTransaction.id = req.params?.transactionId as unknown as number;
  const updated = await editTransaction(editedTransaction);
  if (updated) {
    res.status(200);
    res.json(updated);
  } else {
    res.sendStatus(404);
  }
};

const deleteTransaction: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const transactionId = req.params?.transactionId as unknown as number;
  const result = await removeTransaction(transactionId);
  if (result.isDeleted) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
};

export {
  listTransactions,
  createTransaction,
  readTransaction,
  updateTransaction,
  deleteTransaction,
};
