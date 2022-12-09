import { Transaction } from "../../db/entities/transactions";
import { getRandomId, getRandomNumber } from "../../utils/repository";
import {
  findTransactions,
  addTransaction,
  findTransactionById,
  editTransaction,
  removeTransaction,
} from "../transactions";

jest.mock("typeorm");

describe("transactions repository", () => {
  it("should list transactions", async () => {
    // arrange

    // act
    const result = await findTransactions();

    // assert
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
  });

  it("should add a new transaction", async () => {
    // arrange
    const newTransaction = new Transaction(
      getRandomId(),
      getRandomNumber(),
      getRandomNumber(),
      "mock type",
      "mock description"
    );

    // act
    const result = await addTransaction(newTransaction);

    // assert
    expect(result).toBeDefined();
    expect(result?.id).toBeDefined();
  });

  it.todo("should find a transaction by id");

  it.todo("should edit a transaction");

  it.todo("should remove a transaction");
});
