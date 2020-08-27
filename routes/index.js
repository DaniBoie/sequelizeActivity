const router = require('express').Router()

router.use('/api', require('./drinkRoute.js'))

module.exports = router