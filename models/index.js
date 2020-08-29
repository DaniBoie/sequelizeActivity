const Bean = require('./Bean.js')
const Drink = require('./Drink.js')
const Syrup = require('./Syrup.js')
const Topping = require('./Topping.js')

Bean.hasMany(Drink)
Syrup.hasMany(Drink)
Topping.hasMany(Drink)
Drink.belongsTo(Bean)
Drink.belongsTo(Topping)
Drink.belongsTo(Syrup)

module.exports = { Bean, Drink, Syrup, Topping }