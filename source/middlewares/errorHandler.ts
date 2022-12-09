import { ErrorRequestHandler, Request, Response, NextFunction } from "express";

const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (typeof err === "string") {
    // custom application error
    res.status(400);
    res.json({ message: err });
    return;
  }

  // default to 500 server error
  res.status(500);
  res.json({ message: err.message });
  return;
};

export default errorHandler;
