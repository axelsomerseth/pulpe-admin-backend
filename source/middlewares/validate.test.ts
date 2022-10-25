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
    } as unknown as Request;
    const res = {} as Response;
    const next = jest.fn() as NextFunction;

    // act
    const middlewareFn = validate(categorySchema.create);
    middlewareFn(req, res, next);

    // assert
    expect(next).toHaveBeenCalledTimes(1);
  });

  it("should not call nextFunction if req.body is empty", () => {
    // arrange
    const req = {} as Request;
    const res = {
      status: jest.fn(),
      json: jest.fn(),
    } as unknown as Response;
    const next = jest.fn() as NextFunction;

    // act
    const middlewareFn = validate(categorySchema.create);
    middlewareFn(req, res, next);

    // assert
    expect(next).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledTimes(1);
  });
});
