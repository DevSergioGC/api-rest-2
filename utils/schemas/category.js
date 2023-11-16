import Joi from 'joi'

export const CategorySchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string()
})

export const UpdateCategorySchema = Joi.object({
  name: Joi.string(),
  description: Joi.string()
})
