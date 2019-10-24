const PORT = 3000
const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  const { query } = req
  res.render('home', { query })
})

app.listen(PORT, () => {
  console.log('3000 is running')
})
