const router = require('express').Router()
const { Drink } = require('../models')

router.get('/drinks', (req, res) => {
  Drink.findAll()
    .then(drinks => { res.json(drinks) })
    .catch(err => console.log(err))
})

module.exports = router