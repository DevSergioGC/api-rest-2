import express from 'express'
import ProductsRoutes from './routes/product'
import CategoryRoutes from './routes/category'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api/products', ProductsRoutes)
app.use('/api/category', CategoryRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
