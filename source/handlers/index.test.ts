import { indexHandler } from "./index";
import { Request, Response, NextFunction } from "express";

describe("index handler", () => {
  it("should respond requests correctly", async () => {
    // arrange
    const req = {} as Request;
    const res = {
      send: jest.fn(),
    } as unknown as Response;
    const next = jest.fn() as NextFunction;

    // act
    await indexHandler(req, res, next);

    // assert
    expect(next).not.toHaveBeenCalled();
    expect(res.send).toHaveBeenCalled();
  });
});
