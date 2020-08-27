const router = require('express').Router()
router.get('/beans', (req, res) => {
    Bean.findAll()
      .then(beans => res.json(beans))
      .catch(err => console.log(err))
  })
  

  

module.exports = router