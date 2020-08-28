const router = require('express').Router()
const { Drink, Bean, Syrup, Topping } = require('../models')

// GET all drinks
router.get('/drinks', (req, res) => {
  Drink.findAll({include: [Bean,Syrup,Topping]})
    .then(drinks => { res.json(drinks) })
    .catch(err => console.log('failed'))
})

// Create one drink
router.post('/drinks', (req,res) => {
  Drink.create(req.body)
    .then(drink => {
      Drink.findOne({ where: { id: drink.id }, include: [Bean, Syrup, Topping] })
        .then(fullDrink => res.json(fullDrink))
    })
  .catch(err => console.log(err))
})

module.exports = router