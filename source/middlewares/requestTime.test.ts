import { Request, Response, NextFunction } from "express";
import requestTime from "./requestTime";

describe("requestTime middleware", () => {
  it("should add the time to a request", async () => {
    // arrange
    const req = {} as unknown as Request;
    const res = {} as Response;
    const next = jest.fn() as NextFunction;

    // act
    await requestTime(req, res, next);

    // assert
    expect(next).toHaveBeenCalledTimes(1);
    expect(req.requestTime).toBeDefined();
  });
});
