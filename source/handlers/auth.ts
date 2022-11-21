import { RequestHandler, Request, Response, NextFunction } from "express";
import { Person } from "../db/entities/persons";
import { authenticatePerson, findPersons } from "../repository/persons";

const signIn: RequestHandler = async (req: Request, res: Response) => {
  const user = new Person(
    req.body?.username as string,
    req.body?.password as string
  );
  const person = await authenticatePerson(user);
  if (!person) {
    res.status(400);
    res.json({ errorMessage: "Username or password is incorrect." });
  } else {
    res.status(200);
    res.json(person);
  }
};

const logIn: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // TODO: start session.
};

const logOut: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // TODO: quit session.
};

const myAccount: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // TODO: find data of the actual logged in user without password.
};

const getAllUsers: RequestHandler = async (req: Request, res: Response) => {
  const persons = await findPersons();
  res.status(200);
  res.json(persons);
};

export { signIn, logIn, logOut, getAllUsers, myAccount };
