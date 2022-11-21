import { RequestHandler, Request, Response, NextFunction } from "express";
import { Person } from "../db/entities/persons";
import { authenticatePerson } from "../repository/persons";

const authenticateMiddleware: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Check for basic auth header.
  const hasBasicAuthHeader = await hasBasicAuthorizationHeader(req);
  if (!hasBasicAuthHeader) {
    return res.status(401).json({ message: "Missing Authorization Header" });
  }

  // Verify auth credentials.
  const base64Credentials = req.headers?.authorization?.split(" ")[1];
  const credentials = Buffer.from(
    base64Credentials as string,
    "base64"
  ).toString("ascii");
  const [username, password] = credentials.split(":");

  // Logging only in dev mode.
  if (process.env.MODE === "development") {
    console.debug("Auth Header:", req.headers?.authorization);
    console.debug("Username: ", username, "\nPassword: ", password);
  }

  // Authenticate person/user through the database.
  const person = new Person(username, password);
  const authenticatedPerson = await authenticatePerson(person);
  if (!authenticatedPerson) {
    return res
      .status(401)
      .json({ errorMessage: "Invalid Authentication Credentials." });
  }

  // Attach user to request object.
  // req.person = authenticatedPerson;
  next();
};

// Helper function.
const hasBasicAuthorizationHeader = async (req: Request): Promise<boolean> => {
  if (!req.headers.authorization) {
    return false;
  }

  const doesItHaveAuth =
    req.headers.authorization.indexOf("Basic ") !== -1 ? true : false;
  return doesItHaveAuth;
};

export default authenticateMiddleware;
