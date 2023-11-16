import express from 'express'
import {
  getAllProducts,
  getProductById,
  AddNewProduct,
  updateProduct,
  deleteProduct
} from '../controller/product.js'

const router = express.Router()

router
  .get('/', getAllProducts)
  .get('/:productId', getProductById)
  .post('/', AddNewProduct)
  .put('/:productId', updateProduct)
  .delete('/:productId', deleteProduct)

export default router
