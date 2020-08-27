const Bean = require('./Bean.js')
const Syrup = require('./Syrup.js')
const Topping = require('./Topping.js')
const Drink = require('./Drink.js')

Bean.belongsTo(Drink)
Syrup.belongsTo(Drink)
Topping.belongsTo(Drink)
Drink.hasOne(Bean)
Drink.hasOne(Topping)
Drink.hasOne(Syrup)

module.exports = {Bean, Syrup, Topping, Drink}