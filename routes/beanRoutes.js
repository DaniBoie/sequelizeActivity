const { Bean } = require('../models')

const router = require('express').Router()

// GET all beans
router.get('/beans', (req, res) => {
    Bean.findAll()
      .then(beans => res.json(beans))
      .catch(err => console.log(err))
  })

module.exports = router