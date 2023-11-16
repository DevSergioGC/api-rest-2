import { Category } from '../model/category.js'
import { Product } from '../model/product.js'

export const GetAllCategoriesService = async () => {
  const category = Category.findAll()
  if (!category || category.length === 0) {
    return { error: 'There are not categories registered' }
  }
  return category
}
export const GetProductsInCategoryService = async (categoryId) => {
  const categoryFound = await Category.findByPk(categoryId)
  if (!categoryFound) {
    return { error: 'Category not found' }
  }
  const products = await Product.findAll({
    where: { categoryId }
  })
  if (!products || products.length === 0) {
    return { error: 'No products found in this category' }
  }
  return products
}
export const AddNewCategoryService = async (category) => {
  const alreadyExist = await Category.findOne({
    where: { name: category.name }
  })
  if (alreadyExist) {
    return { error: 'Category already exist' }
  }
  return Category.create(category)
}
export const UpdateCategoryService = async (categoryId, changes) => {
  const categoryFound = await Category.findByPk(categoryId)
  if (!categoryFound) {
    return { error: 'Category not found' }
  }
  return await categoryFound.update(changes)
}
export const DeleteCategoryService = async (categoryId) => {
  const categoryFound = await Category.findByPk(categoryId)
  if (!categoryFound) {
    return { error: 'Category not found' }
  }
  await categoryFound.destroy()
  return { message: 'Category deleted' }
}
