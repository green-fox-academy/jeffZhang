const PORT = 3000
const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use('/assets', express.static('assets'))

app.get('/', function(req, res) {
  res.send('this is the homepage')
})

app.get('/contact', function(req, res) {
  console.log(req.query)
  res.sendFile(__dirname + '/contact.html')
})

app.get('/profile/:name', function(req, res) {
  let data = { age: 10, job: 'pupil', hobbies: ['sitting', 'sleeping'] }
  res.render('profile', { person: req.params.name, data })
})

app.listen(PORT, () => {
  console.log('I am running')
})
