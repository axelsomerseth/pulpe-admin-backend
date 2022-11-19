import Joi from "joi";

const transactionSchema = {
  create: Joi.object({
    productId: Joi.number().required(),
    movement: Joi.number().required(),
    quantity: Joi.number().required(),
    type: Joi.string().max(25).required(),
    description: Joi.string().required(),
  }),
  update: Joi.object({
    productId: Joi.number().required(),
    movement: Joi.number().required(),
    quantity: Joi.number().required(),
    type: Joi.string().max(25).required(),
    description: Joi.string().required(),
  }),
};

export { transactionSchema };
