import { NextFunction, Request, Response } from "express";
import { viewsHandler } from "../views";

describe("views handler", () => {
  it("should render home template", async () => {
    // arrange
    const req = {} as unknown as Request;
    const res = { render: jest.fn() } as unknown as Response;
    const next = jest.fn() as NextFunction;

    // act
    await viewsHandler(req, res, next);

    // assert
    expect(res.render).toHaveBeenCalledWith("home", { categories: [] });
  });
});
