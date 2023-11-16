import Joi from 'joi'

export const ProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string(),
  image: Joi.string(),
  categoryId: Joi.number().required()
})

export const UpdateProductSchema = Joi.object({
  name: Joi.string(),
  price: Joi.number(),
  description: Joi.string(),
  image: Joi.string(),
  categoryId: Joi.number()
})
