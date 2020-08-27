const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')

class Bean extends Model { }

Bean.init({
  name: { type: DataTypes.STRING, allowNull: false },
  caffeine: { type: DataTypes.INTEGER, allowNull: false }
}, { sequelize, modelName: 'bean' })

module.exports = Bean