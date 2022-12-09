import { Request, Response, NextFunction } from "express";
import { Product } from "../../db/entities/products";
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
    expect(res.send).toHaveBeenCalledTimes(1);
  });

  it.todo("should create a product");

  it.todo("should read a product");

  it.todo("should update a product");

  it.todo("should delete a product");
});
