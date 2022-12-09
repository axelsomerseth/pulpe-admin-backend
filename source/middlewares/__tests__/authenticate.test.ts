import { NextFunction, Request, Response } from "express";
import authenticateMiddleware from "../authenticate";

jest.mock("typeorm");

describe("authenticate middleware", () => {
  it("should aunthenticate users", async () => {
    // arrange
    const req = {
      headers: {
        authorization: "Basic bW9ja191c2VybmFtZTptb2NrX3Bhc3N3b3Jk",
      },
    } as unknown as Request;
    const res = { status: jest.fn(), json: jest.fn() } as unknown as Response;
    const next = jest.fn() as NextFunction;

    // act
    await authenticateMiddleware(req, res, next);

    // assert
    expect(next).toHaveBeenCalledTimes(1);
  });

  it("should return error if auth header is not present", async () => {
    // arrange
    const req = {
      headers: {},
    } as unknown as Request;
    const res = { status: jest.fn(), json: jest.fn() } as unknown as Response;
    const next = jest.fn() as NextFunction;

    // act
    await authenticateMiddleware(req, res, next);

    // assert
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledTimes(1);
  });
});
