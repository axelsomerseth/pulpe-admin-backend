import { Request, Response, NextFunction } from "express";
import {
  listCategories,
  readCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "./categories";

describe("listCategories request handler", () => {
  it("should send the response body", async () => {
    // arrange
    const page = 1;
    const size = 1;
    const list: any = [];
    const req: any = {
      query: {
        page,
        size,
      },
    };
    const res: any = { send: jest.fn() };
    const next = jest.fn();

    // act
    await listCategories(req as Request, res as Response, next as NextFunction);

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

  it("should send a 404 error if the requested record was not found", async () => {
    // arrange
    const req: any = {
      params: {
        categoryId: 1,
      },
    };
    const res: any = { sendStatus: jest.fn() };
    const next = jest.fn();

    // act
    await readCategory(req as Request, res as Response, next as NextFunction);

    // assert
    expect(res.sendStatus).toHaveBeenCalledWith(404);
  });
});

describe("createCategory request handler", () => {
  it.todo("should send the created record in the response body");

  it("should send a 500 error if cannot create the requested record", async () => {
    // arrange
    const req: any = {
      body: {
        name: "Test name",
        description: "Test description",
      },
    };
    const res: any = { status: jest.fn(), send: jest.fn() };
    const next = jest.fn();

    // act
    await createCategory(req as Request, res as Response, next as NextFunction);

    // assert
    expect(res.status).toHaveBeenCalledWith(500);
  });
});

describe("updateCategory request handler", () => {
  it.todo("should send the updated record in the response body");

  it("should send a 404 error if cannot update the requested record", async () => {
    // arrange
    const req: any = {
      params: {
        categoryId: 1,
      },
      body: {
        name: "Test name",
        description: "Test description",
      },
    };
    const res: any = {
      status: jest.fn(),
      send: jest.fn(),
      sendStatus: jest.fn(),
      json: jest.fn(),
    };
    const next = jest.fn();

    // act
    await updateCategory(req as Request, res as Response, next as NextFunction);

    // assert
    expect(res.sendStatus).toHaveBeenCalledWith(404);
  });
});

describe("deleteCategory request handler", () => {
  it.todo(
    "should send status code 204 if it was able to delete the requested record"
  );

  it("should send a 404 error if the requested method was not found", async () => {
    // arrange
    const req: any = {
      params: {
        categoryId: 1,
      },
    };
    const res: any = {
      sendStatus: jest.fn(),
    };
    const next = jest.fn();

    // act
    await deleteCategory(req as Request, res as Response, next as NextFunction);

    // assert
    expect(res.sendStatus).toHaveBeenCalledWith(404);
  });
});
