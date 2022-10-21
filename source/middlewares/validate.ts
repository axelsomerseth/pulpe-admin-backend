import { Request, Response, NextFunction } from "express";
import { ObjectSchema, ValidationResult } from "joi";

// Validate incoming HTTP requests with Joi through a middleware
const validate = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result: ValidationResult = schema.validate({ ...req.body });
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

export default validate;
