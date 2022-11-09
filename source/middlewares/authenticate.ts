import { RequestHandler, Request, Response, NextFunction } from "express";

// TODO: complete middleware.

const authenticateMiddleware: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const hasBasicAuthHeader =
    !req.headers.authorization ||
    req.headers.authorization.indexOf("Basic ") === -1
      ? true
      : false;
  if (hasBasicAuthHeader) {
    return res.status(401).json({ message: "Missing Authorization Header" });
  }

  // verify auth credentials
  const base64Credentials = req.headers?.authorization?.split(" ")[1];
  const credentials = Buffer.from(
    base64Credentials as string,
    "base64"
  ).toString("ascii");
  const [username, password] = credentials.split(":");

  // TODO: get user from database.
  // const user = await authenticate({ username, password });
  // if (!user) {
  //   return res
  //     .status(401)
  //     .json({ message: "Invalid Authentication Credentials" });
  // }

  // attach user to request object
  // req.user = user;

  next();
};

export default authenticateMiddleware;
