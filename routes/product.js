import express from 'express'
import {
  GetAllProducts,
  GetProductById,
  AddNewProduct,
  UpdateProduct,
  DeleteProduct
} from '../controller/product.js'

const router = express.Router()

router
  .get('/', GetAllProducts)
  .get('/:productId', GetProductById)
  .post('/', AddNewProduct)
  .put('/:productId', UpdateProduct)
  .delete('/:productId', DeleteProduct)

export default router
