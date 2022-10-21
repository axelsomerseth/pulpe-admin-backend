import Joi from "joi";

const categorySchema = {
  create: Joi.object({
    name: Joi.string().max(60).required(),
    description: Joi.string().max(255),
  }),
  update: Joi.object({
    name: Joi.string().max(60).required(),
    description: Joi.string().max(255),
  }),
};

export { categorySchema };
