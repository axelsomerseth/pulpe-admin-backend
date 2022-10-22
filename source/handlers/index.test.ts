import { indexHandler } from "./index";
import { Request, Response, NextFunction } from "express";

describe("index handler", () => {
  it("should respond requests correctly", () => {
    // arrange
    const req = {};
    const res: any = {
      send: jest.fn(),
    };
    const next = jest.fn();

    // act
    indexHandler(req as Request, res as Response, next as NextFunction);

    // assert
    expect(next).not.toHaveBeenCalled();
    expect(res.send).toHaveBeenCalled();
  });
});
