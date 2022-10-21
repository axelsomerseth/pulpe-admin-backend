import { Request, Response, NextFunction } from "express";

// RequestTime Middleware: adds an attribute to the resquest called "requestTime",
// which contains the date and time when the request was received by the server.
const requestTime = (req: Request, res: Response, next: NextFunction) => {
  // req["requestTime"] = Date.now();
  next();
};

export default requestTime;
