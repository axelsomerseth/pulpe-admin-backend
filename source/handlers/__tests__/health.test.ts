import { NextFunction, Request, Response } from "express";
import { healthCheck } from "../health";

describe("health request handler", () => {
  it("should respond status 200 - OK", async () => {
    // arrange
    const req = {} as unknown as Request;
    const res = { sendStatus: jest.fn() } as unknown as Response;
    const next = jest.fn() as NextFunction;

    // act
    await healthCheck(req, res, next);

    // assert
    expect(res.sendStatus).toHaveBeenCalledWith(200);
  });
});
