import Joi from "joi";

const productSchema = {
  create: Joi.object({
    name: Joi.string().max(150).required(),
    description: Joi.string().required(),
    categoryId: Joi.number().required(),
    price: Joi.number().required(),
    stock: Joi.number().required(),
  }),
  update: Joi.object({
    name: Joi.string().max(150).required(),
    description: Joi.string().required(),
    categoryId: Joi.number().required(),
    price: Joi.number().required(),
    stock: Joi.number().required(),
  }),
};

export { productSchema };
