import { ValidateProduct, ValidateUpdateProduct } from '../utils/validation.js'
import {
  GetAllProductsService,
  GetProductByIdService,
  AddNewProductService,
  UpdateProductService,
  DeleteProductService
} from '../services/product.js'

export const GetAllProducts = async (req, res) => {
  const products = await GetAllProductsService()
  res.status(200).send(products)
}
export const GetProductById = async (req, res) => {
  const { productId } = req.params
  const product = await GetProductByIdService(productId)
  res.status(200).send(product)
}
export const AddNewProduct = async (req, res) => {
  const { error } = ValidateProduct(req.body)

  if (error) {
    res.status(400).send({ error: error.details[0].message })
  }

  const { name, description, price, categoryId } = req.body
  const newProduct = {
    name,
    description,
    price,
    categoryId
  }
  const product = await AddNewProductService(newProduct)
  res.status(201).send(product)
}
export const UpdateProduct = async (req, res) => {
  const { error } = ValidateUpdateProduct(req.body)

  if (error) {
    res.status(400).send({ error: error.details[0].message })
  }
  const { productId } = req.params
  const { name, description, price, categoryId } = req.body
  const changes = {
    name,
    description,
    price,
    categoryId
  }
  const product = await UpdateProductService(productId, changes)
  res.status(200).send(product)
}
export const DeleteProduct = async (req, res) => {
  const { productId } = req.params
  const message = await DeleteProductService(productId)
  res.status(200).send(message)
}
