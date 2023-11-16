import express from 'express'
import ProductsRoutes from './routes/product.js'
import CategoryRoutes from './routes/category.js'
import { sequelize } from './db.js'
import { Product } from './model/product.js'
import { Category } from './model/category.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api/product', ProductsRoutes)
app.use('/api/category', CategoryRoutes)

sequelize.sync({ force: false }).then(() => {
  console.log('Database and tables synced')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
