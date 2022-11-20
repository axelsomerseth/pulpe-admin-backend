import { Request, Response, NextFunction } from "express";
import { Category } from "../db/entities/categories";
import {
  listCategories,
  readCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "./categories";

describe("listCategories request handler", () => {
  it.failing("should send the response body", async () => {
    // arrange
    const page = 1;
    const size = 1;
    const list: Category[] = [];
    const req = {
      query: {
        page,
        size,
      },
    } as unknown as Request;
    const res = { send: jest.fn() } as unknown as Response;
    const next = jest.fn() as NextFunction;

    // act
    await listCategories(req, res, next);

    // assert
    expect(res.send).toHaveBeenCalledWith({
      page,
      size,
      data: list,
    });
  });
});

describe("readCategory request handler", () => {
  it.todo("should send one record in response body");

  it.failing(
    "should send a 404 error if the requested record was not found",
    async () => {
      // arrange
      const req = {
        params: {
          categoryId: 1,
        },
      } as unknown as Request;
      const res = { sendStatus: jest.fn() } as unknown as Response;
      const next = jest.fn() as NextFunction;

      // act
      await readCategory(req, res, next);

      // assert
      expect(res.sendStatus).toHaveBeenCalledWith(404);
    }
  );
});

describe("createCategory request handler", () => {
  it.todo("should send the created record in the response body");

  it.failing(
    "should send a 500 error if cannot create the requested record",
    async () => {
      // arrange
      const req = {
        body: {
          name: "Test name",
          description: "Test description",
        },
      } as unknown as Request;
      const res = { status: jest.fn(), send: jest.fn() } as unknown as Response;
      const next = jest.fn() as NextFunction;

      // act
      await createCategory(req, res, next);

      // assert
      expect(res.status).toHaveBeenCalledWith(500);
    }
  );
});

describe("updateCategory request handler", () => {
  it.todo("should send the updated record in the response body");

  it.failing(
    "should send a 404 error if cannot update the requested record",
    async () => {
      // arrange
      const req = {
        params: {
          categoryId: 1,
        },
        body: {
          name: "Test name",
          description: "Test description",
        },
      } as unknown as Request;
      const res = {
        status: jest.fn(),
        send: jest.fn(),
        sendStatus: jest.fn(),
        json: jest.fn(),
      } as unknown as Response;
      const next = jest.fn() as NextFunction;

      // act
      await updateCategory(req, res, next);

      // assert
      expect(res.sendStatus).toHaveBeenCalledWith(404);
    }
  );
});

describe("deleteCategory request handler", () => {
  it.todo(
    "should send status code 204 if it was able to delete the requested record"
  );

  it.failing(
    "should send a 404 error if the requested method was not found",
    async () => {
      // arrange
      const req = {
        params: {
          categoryId: 1,
        },
      } as unknown as Request;
      const res = {
        sendStatus: jest.fn(),
      } as unknown as Response;
      const next = jest.fn() as NextFunction;

      // act
      await deleteCategory(req, res, next);

      // assert
      expect(res.sendStatus).toHaveBeenCalledWith(404);
    }
  );
});
