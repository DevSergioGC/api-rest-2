import { ProductSchema, UpdateProductSchema } from './schemas/product.js'
import { CategorySchema, UpdateCategorySchema } from './schemas/category.js'

export const ValidateProduct = (data) => ProductSchema.validate(data)
export const ValidateCategory = (data) => CategorySchema.validate(data)
export const ValidateUpdateCategory = (data) => UpdateCategorySchema.validate(data)
export const ValidateUpdateProduct = (data) => UpdateProductSchema.validate(data)
