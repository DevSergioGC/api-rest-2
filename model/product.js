import { DataTypes } from 'sequelize'
import { sequelize } from '../db.js'
import { Category } from './category.js'

export const Product = sequelize.define('product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
    unique: true
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    required: true
  },
  description: String,
  image: String
})

Product.belongsTo(Category)
