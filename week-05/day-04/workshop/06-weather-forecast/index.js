const PORT = 3000
const express = require('express')
const app = express()

const cities = require('./data')

app.set('view engine', 'ejs')
app.use('/static', express.static('static'))

app.get('/', (req, res) => {
  res.render('home', { cities })
})

app.get('/cities/:name', (req, res) => {
  const cityName = req.params.name
  const city = cities.find(
    city => city.city.toUpperCase() === cityName.toUpperCase()
  )

  if (city) {
    res.render('city', { city })
  } else {
    res.render('notFound', { cityName })
  }
})

app.listen(PORT, () => {
  console.log('3000 is running')
})
