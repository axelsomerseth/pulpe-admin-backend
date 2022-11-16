import Joi from "joi";

const categorySchema = {
  create: Joi.object({
    name: Joi.string().max(150).required(),
    description: Joi.string(),
  }),
  update: Joi.object({
    name: Joi.string().max(150).required(),
    description: Joi.string(),
  }),
};

export { categorySchema };
