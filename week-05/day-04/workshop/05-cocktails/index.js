const PORT = 3000
const express = require('express')
const app = express()

const { alcoholList, cocktails } = require('./data')

app.set('view engine', 'ejs')
app.use('/static', express.static('static'))

app.get('/', (req, res) => {
  const { query } = req
  //igonre all the queries if alcohol is not there
  if (Object.keys(query).includes('alcohol')) {
    const type = query['alcohol']
    if (alcoholList.includes(type)) {
      let results = cocktails.filter(cocktail =>
        cocktail.contains.includes(type)
      )
      res.render('home', { cocktails: results, alcoholList })
    } else {
      res.render('home', { cocktails, alcoholList })
    }
  } else {
    res.render('home', { cocktails, alcoholList })
  }
})

app.listen(PORT, () => {
  console.log('3000 is running')
})
