import express from 'express'
import {
  getAllCategories,
  getProductsInCategory,
  AddNewCategory,
  updateCategory,
  deleteCategory
} from '../controller/category.js'

const router = express.Router()

router
  .get('/', getAllCategories)
  .get('/:categoryId', getProductsInCategory)
  .post('/', AddNewCategory)
  .put('/:categoryId', updateCategory)
  .delete('/:categoryId', deleteCategory)

export default router
