import express from 'express'
import {
  getAllCategories,
  getProductsInCategory,
  AddNewCategory,
  updateCategoryt,
  deleteCategoryt
} from '../controllers/category.js'

const router = express.Router() ===

router
  .get('/', getAllCategories)
  .get('/:categoryId', getProductsInCategory)
  .post('/', AddNewCategory)
  .put('/:categoryId', updateCategoryt)
  .delete('/:categoryId', deleteCategoryt)

export default router
