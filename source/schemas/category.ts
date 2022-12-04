import Joi from "joi";

const category = {
  name: Joi.string().max(150).required(),
  description: Joi.string(),
};

const categorySchema = {
  create: Joi.object(category),
  update: Joi.object({ ...category, id: Joi.number() }),
  import: Joi.array().items(Joi.object(category)),
};

export { categorySchema };
