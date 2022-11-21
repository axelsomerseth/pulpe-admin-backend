// ? How to add custom properties on the Request object in Express
// ? How to extend the Express Request object in TypeScript
// * https://blog.logrocket.com/extend-express-request-object-typescript/

import { Person } from "../../db/entities/persons";

// to make the file a module and avoid the TypeScript error
export {};

declare global {
  namespace Express {
    export interface Request {
      language?: Language;
      person?: Person;
      requestTime?: number;
    }
  }
}
