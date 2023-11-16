import { Product } from '../model/product.js'

export const GetAllProductsService = async () => {
  const product = await Product.findAll()
  if (!product || product.length === 0) {
    return { error: 'There are not products registered' }
  }
  return product
}
export const GetProductByIdService = async (productId) => {
  const product = await Product.findByPk(productId)
  if (!product || product.length === 0) {
    return { error: 'Product not found' }
  }
  return product
}
export const AddNewProductService = async (product) => {
  const productFound = await Product.findByPk(product.id)
  if (!productFound || productFound.length === 0) {
    return await Product.create(product)
  }
  return { error: 'Product already exist' }
}
export const UpdateProductService = async (productId, changes) => {
  const productFound = await Product.findByPk(productId)
  if (!productFound || productFound.length === 0) {
    return { error: 'Product not found' }
  }
  return await productFound.update(changes)
}
export const DeleteProductService = async (productId) => {
  const productFound = await Product.findByPk(productId)
  if (!productFound || productFound.length === 0) {
    return { error: 'Product not found' }
  }
  await productFound.destroy()
  return { message: 'Product deleted' }
}
