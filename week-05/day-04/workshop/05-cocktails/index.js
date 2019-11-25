const PORT = 3000
const express = require('express')
const app = express()

const { alcoholList, cocktails } = require('./data')

app.set('view engine', 'ejs')
app.use('/static', express.static('static'))

app.get('/', (req, res) => {
  const { query } = req
  //igonre all the queries if alcohol is not there
  if (
    Object.keys(query).includes('alcohol') &&
    alcoholList.includes(query['alcohol'])
  ) {
    let results = cocktails.filter(cocktail =>
      cocktail.contains.includes(query['alcohol'])
    )
    res.status(200).render('home', { cocktails: results, alcoholList })
    return
  }
  res.status(200).render('home', { cocktails, alcoholList })
})

app.listen(PORT, () => {
  console.log('3000 is running')
})
