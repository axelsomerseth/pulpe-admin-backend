import { RequestHandler, Request, Response } from "express";

const healthCheck: RequestHandler = (req: Request, res: Response) => {
  res.sendStatus(200);
};

export { healthCheck };
