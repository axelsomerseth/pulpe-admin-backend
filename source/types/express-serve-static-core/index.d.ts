// ? How to add custom properties on the Request object in Express
// ? How to extend the Express Request object in TypeScript
// * https://blog.logrocket.com/extend-express-request-object-typescript/

import { Person } from "../../db/entities/persons";
import { Language, RequestTime } from "../custom";

declare global {
  namespace Express {
    export interface Request {
      language?: Language;
      requestTime?: number;
      person?: Person;
    }
  }
}

// To make the file a module and avoid the TypeScript error.
export {};
