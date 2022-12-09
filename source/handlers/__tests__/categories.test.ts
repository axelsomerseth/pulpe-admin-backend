import { Request, Response, NextFunction } from "express";
import { getRandomId } from "../../utils/repository";
import {
  listCategories,
  readCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../categories";

jest.mock("typeorm");

describe("categories request handler", () => {
  it("should list categories", async () => {
    // arrange
    const page = 1;
    const size = 1;
    const req = {
      query: {
        page,
        size,
      },
    } as unknown as Request;
    const res = { status: jest.fn(), send: jest.fn() } as unknown as Response;
    const next = jest.fn() as NextFunction;

    // act
    await listCategories(req, res, next);

    // assert
    expect(res.send).toHaveBeenCalledTimes(1);
  });

  it.todo("should import multiple categories");

  it("should create one category", async () => {
    // arrange
    const req = {
      body: {
        name: "Mock Name",
        description: "Mock Description",
      },
    } as unknown as Request;
    const res = { status: jest.fn(), send: jest.fn() } as unknown as Response;
    const next = jest.fn() as NextFunction;

    // act
    await createCategory(req, res, next);

    // assert
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledTimes(1);
  });

  it("should read one category", async () => {
    // arrange
    const req = { params: { categoryId: getRandomId() } } as unknown as Request;
    const res = { status: jest.fn(), send: jest.fn() } as unknown as Response;
    const next = jest.fn() as NextFunction;

    // act
    await readCategory(req, res, next);

    // assert
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledTimes(1);
  });

  it("should update one category", async () => {
    // arrange
    const req = {
      params: { categoryId: getRandomId() },
      body: {
        name: "Mock Name",
        description: "Mock Description",
      },
    } as unknown as Request;
    const res = { status: jest.fn(), send: jest.fn() } as unknown as Response;
    const next = jest.fn() as NextFunction;

    // act
    await updateCategory(req, res, next);

    // assert
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledTimes(1);
  });

  it("should delete one category", async () => {
    // arrange
    const req = { params: { categoryId: getRandomId() } } as unknown as Request;
    const res = { sendStatus: jest.fn() } as unknown as Response;
    const next = jest.fn() as NextFunction;

    // act
    await deleteCategory(req, res, next);

    // assert
    expect(res.sendStatus).toHaveBeenCalledTimes(1);
    expect(res.sendStatus).toHaveBeenCalledWith(204);
  });
});
