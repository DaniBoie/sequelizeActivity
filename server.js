const express = require('express')
const app = express()
const { join } = require('path')

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./db').sync({force: true})
  .then(() => app.listen(3000))
  .catch(err => console.log(err))
