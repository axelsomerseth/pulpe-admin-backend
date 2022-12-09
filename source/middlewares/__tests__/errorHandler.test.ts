import { NextFunction, Request, Response } from "express";
import errorHandler from "../errorHandler";

describe("error middleare", () => {
  it("should return a custom application error", async () => {
    // arrange
    const err = "custom error";
    const req = {} as unknown as Request;
    const res = { status: jest.fn(), json: jest.fn() } as unknown as Response;
    const next = jest.fn() as NextFunction;

    // act
    await errorHandler(err, req, res, next);

    // assert
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledTimes(1);
  });

  it("should return a custom application error", async () => {
    // arrange
    const err = new Error("error");
    const req = {} as unknown as Request;
    const res = { status: jest.fn(), json: jest.fn() } as unknown as Response;
    const next = jest.fn() as NextFunction;

    // act
    await errorHandler(err, req, res, next);

    // assert
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledTimes(1);
  });
});
