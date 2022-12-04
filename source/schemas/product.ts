import Joi from "joi";

const product = {
  name: Joi.string().max(150).required(),
  description: Joi.string().required(),
  categoryId: Joi.number().required(),
  price: Joi.number().required(),
  stock: Joi.number().required(),
};

const productSchema = {
  create: Joi.object(product),
  update: Joi.object({ ...product, id: Joi.number() }),
};

export { productSchema };
