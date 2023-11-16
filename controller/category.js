import {
  GetAllCategoriesService,
  GetProductsInCategoryService,
  AddNewCategoryService,
  UpdateCategoryService,
  DeleteCategoryService
} from '../services/category.js'
import {
  ValidateCategory,
  ValidateUpdateCategory
} from '../utils/validation.js'

export const GetAllCategories = async (req, res) => {
  const categories = await GetAllCategoriesService()
  res.status(200).send(categories)
}
export const GetProductsInCategory = async (req, res) => {
  const { categoryId } = req.params
  const products = await GetProductsInCategoryService(categoryId)
  res.status(200).send(products)
}
export const AddNewCategory = async (req, res) => {
  const { error } = ValidateCategory(req.body)

  if (error) {
    res.status(400).send(error.details[0].message)
  }

  const { name, description } = req.body
  const newCategory = {
    name,
    description
  }
  const category = await AddNewCategoryService(newCategory)
  res.status(201).send(category)
}
export const UpdateCategory = async (req, res) => {
  const { error } = ValidateUpdateCategory(req.body)

  if (error) {
    res.status(400).send(error.details[0].message)
  }
  const { categoryId } = req.params
  const { name, description } = req.body
  const changes = {
    name,
    description
  }
  const category = await UpdateCategoryService(categoryId, changes)
  res.status(200).send(category)
}
export const DeleteCategory = async (req, res) => {
  const { categoryId } = req.params
  const message = await DeleteCategoryService(categoryId)
  res.status(200).send(message)
}
