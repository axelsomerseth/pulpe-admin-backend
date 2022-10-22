import { RequestHandler, Request, Response, NextFunction } from "express";

const indexHandler: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send(`Welcome to Pulpe Admin REST API.`);
};

export { indexHandler };
