import { indexHandler } from "../index";
import { Request, Response, NextFunction } from "express";

jest.mock("typeorm");

describe("index request handler", () => {
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
    expect(res.send).toHaveBeenCalledTimes(1);
  });
});
