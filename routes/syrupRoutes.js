const router = require('express').Router()
const { Syrup } = require('../models')


// GET all syrups
router.get('/syrups', (req, res) => {
  Syrup.findAll()
    .then(syrups => res.json(syrups))
    .catch(err => console.log(err))
})

// CREATE syrup
router.post('/syrups', (req, res) => {
  Syrup.create(req.body)
    .then(syrup => res.json(syrup))
    .catch(err => console.log(err))
})

module.exports = router