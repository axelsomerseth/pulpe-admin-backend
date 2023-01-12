import { Product } from "../db/entities/products";
import { Transaction } from "../db/entities/transactions";
import { AppDataSource } from "../db/connection";

const transactionRepository = AppDataSource.getRepository(Transaction);

const findTransactions = async (): Promise<Transaction[]> => {
  let results = await transactionRepository.find();
  return results;
};

const addTransaction = async (
  transaction: Transaction
): Promise<Transaction | null> => {
  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();
  let newTransaction = new Transaction(
    transaction.productId as number,
    transaction.movement as number,
    transaction.quantity as number,
    transaction.type as string,
    transaction.description as string
  );
  newTransaction.createdAt = new Date();

  try {
    const product = await queryRunner.manager.findOneBy(Product, {
      id: newTransaction.productId,
    });
    const newProduct = new Product(
      product?.name as string,
      product?.description as string,
      product?.categoryId as number,
      product?.price as number,
      product?.stock as number
    );
    newProduct.id = product?.id;
    newProduct.createdAt = product?.createdAt;
    newProduct.updatedAt = new Date();

    // TODO: use an enum for movement property.
    // TODO: this logic should be in the services folder/layer.
    // TODO: stock should be calculated when it comes => SOLID principles (S).
    if (newTransaction.movement === 1) {
      // 1 => In
      newProduct.stock = newProduct.stock + newTransaction.quantity;
    } else if (newTransaction.movement === 2) {
      // 2 => Out
      newProduct.stock = newProduct.stock - newTransaction.quantity;
    }

    await queryRunner.manager.save(newProduct);
    await queryRunner.manager.save(newTransaction);

    await queryRunner.commitTransaction();
  } catch (error: unknown) {
    console.error(error);
    await queryRunner.rollbackTransaction();
    return null;
  } finally {
    await queryRunner.release();
    return newTransaction;
  }
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

  try {
    await transactionRepository.save(transactionToUpdate);
  } catch (err: unknown) {
    console.error(err);
  }

  return transactionToUpdate;
};

const removeTransaction = async (
  transactionId: number
): Promise<{ isDeleted: boolean }> => {
  const transactionToRemove = await transactionRepository.findOneBy({
    id: transactionId,
  });

  if (transactionToRemove === null) return { isDeleted: false };

  try {
    await transactionRepository.remove(transactionToRemove);
  } catch (err: unknown) {
    console.error(err);
  }

  return { isDeleted: true };
};

export {
  findTransactions,
  addTransaction,
  findTransactionById,
  editTransaction,
  removeTransaction,
};
