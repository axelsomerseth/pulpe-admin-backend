import Joi from "joi";

const inventoryTransaction = {
  productId: Joi.number().required(),
  movement: Joi.number().required(),
  quantity: Joi.number().required(),
  type: Joi.string().max(25).required(),
  description: Joi.string().required(),
};

const transactionSchema = {
  create: Joi.object(inventoryTransaction),
  update: Joi.object(inventoryTransaction),
};

export { transactionSchema };
