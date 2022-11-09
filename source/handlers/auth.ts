import { RequestHandler, Request, Response, NextFunction } from "express";

const authenticate: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // TODO: find username in database and return it without password.
};

const signIn: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // TODO: create username in database.
};

const logIn: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // TODO: start session.
};

const logOut: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // TODO: quit session.
};

const myAccount: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // TODO: find data of the actual logged in user without password.
};

const getAllUsers: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // TODO: get all users without passwords.
};

export { authenticate, signIn, logIn, logOut, getAllUsers, myAccount };
