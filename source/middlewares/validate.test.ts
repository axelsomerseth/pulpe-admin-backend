import validate from "./validate";
import { categorySchema } from "../schemas/category";
import { Request, Response, NextFunction } from "express";

describe("validate middleware", () => {
  it("should return a defined middleware function", () => {
    // arrange

    // act
    const middlewareFn = validate(categorySchema.create);

    // assert
    expect(middlewareFn).toBeDefined();
    expect(middlewareFn).toBeInstanceOf(Function);
  });

  it("should return call nextFunction if req.body is not empty", () => {
    // arrange
    const req = {
      body: {
        name: "Test name",
        description: "Test description",
      },
    };
    const res = {};
    const next = jest.fn();

    // act
    const middlewareFn = validate(categorySchema.create);
    middlewareFn(req as Request, res as Response, next as NextFunction);

    // assert
    expect(next).toHaveBeenCalledTimes(1);
  });

  it("should not call nextFunction if req.body is empty", () => {
    // arrange
    const req = {};
    const res = {
      status: jest.fn(),
      json: jest.fn(),
    };
    const next = jest.fn();

    // act
    const middlewareFn = validate(categorySchema.create);
    middlewareFn(
      req as Request,
      res as unknown as Response,
      next as NextFunction
    );

    // assert
    expect(next).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledTimes(1);
  });
});
