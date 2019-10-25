const PORT = 3000
const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.static('assets'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

//------------------------helpers------------------------------//
const sum = number => {
  let result = 0
  for (let i = 0; i <= number; i++) {
    result += i
  }
  return result
}

const factor = number => {
  let result = 1
  for (let i = 1; i <= number; i++) {
    result *= i
  }
  return result
}

//-------------------------doubling-----------------------------//
app.get('/doubling', (req, res) => {
  const { query } = req
  if (query.input) {
    res.json({ received: query.input, result: query.input * 2 })
  } else {
    res.json({
      error: 'Please provide an input!'
    })
  }
})

//---------------------------greeter---------------------------//
app.get('/greeter', (req, res) => {
  const { query } = req

  if (query.name && query.title) {
    res.json({
      welcome_message: `Oh, hi there ${query.name}, my dear student!`
    })
  } else if (!query.name && query.title) {
    res.json({
      error: 'Please provide a name!'
    })
  } else if (!query.title && query.name) {
    res.json({
      error: 'Please provide a title!'
    })
  } else {
    res.json({
      error: 'Please provide a name and a title!'
    })
  }
})

//------------------------append a------------------------------//
app.get('/appenda/:appendable', (req, res) => {
  const { params } = req
  if (params.appendable) {
    res.json({
      appended: params.appendable + 'a'
    })
  }
  res.send('404 page not found')
})

//-------------------------do until-----------------------------//
app.post('/dountil/:action', (req, res) => {
  const { params, body } = req
  const number = body.until
  if (number) {
    switch (params.action) {
      case 'sum':
        res.json({ result: sum(number) })
      case 'factor':
        res.json({ result: factor(number) })
      default:
        res.json({ result: number })
    }
  }
  res.json({
    error: 'Please provide a number!'
  })
})

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`)
})
