import { NextFunction, Request, Response } from "express";
import {
  createTransaction,
  listTransactions,
  readTransaction,
} from "../transactions";
import { getRandomId, getRandomNumber } from "../../utils/repository";

describe("transaction handler", () => {
  it("should list transactions", async () => {
    // arrange
    const req = {} as unknown as Request;
    const res = { status: jest.fn(), send: jest.fn() } as unknown as Response;
    const next = jest.fn() as NextFunction;

    // act
    await listTransactions(req, res, next);

    // assert
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledTimes(1);
  });

  it("should create a brand new transaction", async () => {
    // arrange
    const req = {
      body: {
        productId: getRandomId(),
        movement: getRandomNumber(),
        quantity: getRandomNumber(),
        type: "mock type",
        description: "mock description",
      },
    } as unknown as Request;
    const res = { status: jest.fn(), send: jest.fn() } as unknown as Response;
    const next = jest.fn() as NextFunction;

    // act
    await createTransaction(req, res, next);

    // assert
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalledTimes(1);
  });

  it("should read an existing transaction", async () => {
    // arrange
    const req = {
      params: {
        productId: getRandomId(),
      },
    } as unknown as Request;
    const res = { status: jest.fn(), send: jest.fn() } as unknown as Response;
    const next = jest.fn() as NextFunction;

    // act
    await readTransaction(req, res, next);

    // assert
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledTimes(1);
  });

  it.todo("should update an existing transaction");

  it.todo("should delete an existing transaction");
});
