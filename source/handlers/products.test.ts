import { Request, Response, NextFunction } from "express";
import { Product } from "../db/entities/products";
import {
  listProducts,
  readProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./products";

describe("listProducts request handler", () => {
  it.failing("should write an array in the response body", async () => {
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
    const res = { json: jest.fn() } as unknown as Response;
    const next = jest.fn() as NextFunction;

    // act
    await listProducts(req, res, next);

    // assert
    expect(res.json).toHaveBeenCalledWith({
      page,
      size,
      data: list,
    });
  });
});

describe("readProduct request handler", () => {
  it.todo("should send one record in response body");

  it.failing(
    "should send a 404 error if the requested record was not found",
    async () => {
      // arrange
      const req = {
        params: {
          productId: 1,
        },
      } as unknown as Request;
      const res = { sendStatus: jest.fn() } as unknown as Response;
      const next = jest.fn() as NextFunction;

      // act
      await readProduct(req, res, next);

      // assert
      expect(res.sendStatus).toHaveBeenCalledWith(404);
    }
  );
});

describe("createProduct request handler", () => {
  it.todo("should send the created record in the response body");
  it("should send a 500 error if cannot create the requested record", async () => {
    // arrange
    const product = {
      name: "Test name",
      description: "Test description",
      categoryId: 1,
      price: 100,
      stock: 12,
    };
    const req = {
      body: {
        ...product,
      },
    } as unknown as Request;
    const res = { sendStatus: jest.fn() } as unknown as Response;
    const next = jest.fn() as NextFunction;

    // act
    await createProduct(req, res, next);

    // assert
    expect(res.sendStatus).toHaveBeenCalledWith(500);
  });
});

describe("updateProduct request handler", () => {
  it.todo("should send the updated record in the response body");

  it.failing(
    "should send a 404 error if cannot update the requested record",
    async () => {
      // arrange
      const product = {
        name: "Test name",
        description: "Test description",
        categoryId: 1,
        price: 100,
        stock: 12,
      };
      const req = {
        params: {
          productId: 1,
        },
        body: {
          ...product,
        },
      } as unknown as Request;
      const res = { sendStatus: jest.fn() } as unknown as Response;
      const next = jest.fn() as NextFunction;

      // act
      await updateProduct(req, res, next);

      // assert
      expect(res.sendStatus).toHaveBeenCalledWith(404);
    }
  );
});

describe("deleteProduct request handler", () => {
  it.todo(
    "should send status code 204 if it was able to delete the requested record"
  );

  it.failing(
    "should send an 404 error if the requested method was not found",
    async () => {
      // arrange
      const req = {
        params: {
          productId: 1,
        },
      } as unknown as Request;
      const res = { sendStatus: jest.fn() } as unknown as Response;
      const next = jest.fn() as NextFunction;

      // act
      await deleteProduct(req, res, next);

      // assert
      expect(res.sendStatus).toHaveBeenCalledWith(404);
    }
  );
});
