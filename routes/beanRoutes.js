const { Bean } = require('../models')

const router = require('express').Router()

// GET all beans
router.get('/beans', (req, res) => {
    Bean.findAll()
      .then(beans => res.json(beans))
      .catch(err => console.log(err))
  })

// CREATE a bean
router.post('/beans', (req,res) => {
  Bean.create(req.body)
  .then(bean => res.json(bean))
  .catch(err => console.log(err))
})

module.exports = router