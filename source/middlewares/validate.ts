import { RequestHandler, Request, Response, NextFunction } from "express";
import { Schema, ObjectSchema, ArraySchema, ValidationResult } from "joi";

// Validate incoming HTTP requests with Joi through a middleware
const validate = (schema: Schema): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    let result: ValidationResult = schema.validate(req.body);
    if (result.error) {
      res.status(400);
      res.json({
        errors: result.error.details,
      });
      return;
    }
    next();
  };
};

// Type Guards
function isObjectSchema(schema: Schema): schema is ObjectSchema {
  return schema ? true : false;
}
function isArraySchema(schema: Schema): schema is ArraySchema {
  return schema ? true : false;
}

export default validate;
