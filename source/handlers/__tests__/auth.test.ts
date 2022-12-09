import { NextFunction, Request, Response } from "express";
import { signIn, signUp, myAccount } from "../auth";

describe("auth handler", () => {
  it("should sign up a new user", async () => {
    // arrange
    const req = {
      body: {
        username: "mock_user",
        password: "mock_password",
      },
    } as unknown as Request;
    const res = { status: jest.fn(), json: jest.fn() } as unknown as Response;
    const next = jest.fn() as NextFunction;

    // act
    await signUp(req, res, next);

    // assert
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledTimes(1);
  });

  it("should sign in an existing user", async () => {
    // arrange
    const req = {
      body: {
        username: "mock_user",
        password: "mock_password",
      },
    } as unknown as Request;
    const res = { status: jest.fn(), json: jest.fn() } as unknown as Response;
    const next = jest.fn() as NextFunction;

    // act
    await signIn(req, res, next);

    // assert
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledTimes(1);
  });

  it.todo("should sign out a signed in user");

  it("should give access to a user's account", async () => {
    // arrange
    const req = {
      person: {
        username: "mock_user",
        password: "mock_password",
      },
    } as unknown as Request;
    const res = { status: jest.fn(), json: jest.fn() } as unknown as Response;
    const next = jest.fn() as NextFunction;

    // act
    await myAccount(req, res, next);

    // assert
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledTimes(1);
  });

  it.todo("should retrieve all users");
});
