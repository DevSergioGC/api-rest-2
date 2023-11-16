import express from 'express'
import {
  GetAllCategories,
  GetProductsInCategory,
  AddNewCategory,
  UpdateCategory,
  DeleteCategory
} from '../controller/category.js'

const router = express.Router()

router
  .get('/', GetAllCategories)
  .get('/:categoryId', GetProductsInCategory)
  .post('/', AddNewCategory)
  .put('/:categoryId', UpdateCategory)
  .delete('/:categoryId', DeleteCategory)

export default router
