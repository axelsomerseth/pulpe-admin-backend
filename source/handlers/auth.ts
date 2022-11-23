import { RequestHandler, Request, Response, NextFunction } from "express";
import { Person } from "../db/entities/persons";
import {
  addPerson,
  authenticatePerson,
  findPersons,
} from "../repository/persons";

const signUp: RequestHandler = async (req: Request, res: Response) => {
  const user = new Person(
    req.body?.username as string,
    req.body?.password as string
  );
  const person = await addPerson(user);
  if (!person) {
    res.status(500);
    res.json({ errorMessage: "Error while signing up." });
  } else {
    res.status(201);
    res.json({ ...person, password: "" });
  }
};

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
    res.json({ ...person, password: "" });
  }
};

// ! Basic Authentication wasn't designed to manage logging out.
const signOut: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // TODO: quit session.
  res.send("TODO: Sign out");
};

const myAccount: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const personSignedIn = req.person;
  if (!personSignedIn?.username) {
    res.status(401);
    res.json({ errorMessage: "Not authorized." });
  } else {
    res.status(200);
    res.json({ ...personSignedIn, password: "" });
  }
};

const getAllUsers: RequestHandler = async (req: Request, res: Response) => {
  const persons = await findPersons();
  res.status(200);
  res.json(persons);
};

export { signUp, signIn, signOut, myAccount, getAllUsers };
