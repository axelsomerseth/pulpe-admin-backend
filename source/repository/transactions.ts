import { Transaction } from "../db/entities/transactions";
import { AppDataSource } from "../db/connection";

const transactionRepository = AppDataSource.getRepository(Transaction);

const findTransactions = async (): Promise<Transaction[]> => {
  let results = await transactionRepository.find();
  return results;
};

const addTransaction = async (
  transaction: Transaction
): Promise<Transaction> => {
  let newTransaction = new Transaction(
    transaction.productId,
    transaction.movement,
    transaction.quantity,
    transaction.type,
    transaction.description
  );
  newTransaction.createdAt = new Date();
  await transactionRepository.save(newTransaction);
  return newTransaction;
};

const findTransactionById = async (
  transactionId: number
): Promise<Transaction | null> => {
  let result = await transactionRepository.findOneBy({ id: transactionId });
  return result;
};

const editTransaction = async (
  transaction: Transaction
): Promise<Transaction | null> => {
  let transactionToUpdate = await transactionRepository.findOneBy({
    id: transaction.id,
  });

  if (transactionToUpdate === null) return null;

  transactionToUpdate.productId = transaction.productId;
  transactionToUpdate.movement = transaction.movement;
  transactionToUpdate.quantity = transaction.quantity;
  transactionToUpdate.type = transaction.type;
  transactionToUpdate.description = transaction.description;
  transactionToUpdate.updatedAt = new Date();

  await transactionRepository.save(transactionToUpdate);
  return transactionToUpdate;
};

const removeTransaction = async (
  transactionId: number
): Promise<{ isDeleted: boolean }> => {
  const transactionToRemove = await transactionRepository.findOneBy({
    id: transactionId,
  });

  if (transactionToRemove === null) return { isDeleted: false };

  await transactionRepository.remove(transactionToRemove);
  return { isDeleted: true };
};

export {
  findTransactions,
  addTransaction,
  findTransactionById,
  editTransaction,
  removeTransaction,
};
