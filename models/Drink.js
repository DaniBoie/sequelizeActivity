const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')

class Drink extends Model { }

Drink.init({
  name: { type: DataTypes.STRING, allowNull: false }
}, { sequelize, modelName: 'drink' })

module.exports = Drink