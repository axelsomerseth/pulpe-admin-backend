import { Request, Response, NextFunction } from "express";
import { Product } from "../../db/entities/products";
import { getRandomId, getRandomNumber } from "../../utils/repository";
import {
  listProducts,
  readProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../products";

jest.mock("typeorm");

describe("products request handler", () => {
  it("should list products", async () => {
    // arrange
    const page = 1;
    const size = 0;
    const list: Product[] = [];
    const req = {
      query: {
        page,
        size,
      },
    } as unknown as Request;
    const res = { status: jest.fn(), send: jest.fn() } as unknown as Response;
    const next = jest.fn() as NextFunction;

    // act
    await listProducts(req, res, next);

    // assert
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledTimes(1);
  });

  it("should create a product", async () => {
    // arrange
    const req = {
      body: {
        name: "Mock name",
        description: "Mock description",
        categoryId: getRandomId(),
        price: getRandomNumber(),
        stock: getRandomNumber(),
      },
    } as unknown as Request;
    const res = { status: jest.fn(), send: jest.fn() } as unknown as Response;
    const next = jest.fn() as NextFunction;

    // act
    await createProduct(req, res, next);

    // assert
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledTimes(1);
  });

  it.todo("should read a product");

  it.todo("should update a product");

  it.todo("should delete a product");
});
