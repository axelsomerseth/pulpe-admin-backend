// ? How to add custom properties on the Request object in Express
// ? How to extend the Request object from Express module in TypeScript
// * https://blog.logrocket.com/extend-express-request-object-typescript/
// * https://stackoverflow.com/questions/74514620/how-to-add-custom-properties-on-the-request-object-in-express-typescript/

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
