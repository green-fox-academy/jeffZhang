const PORT = 8080
const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.static('assets'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

//------------------------helpers------------------------------//
const operate = (action, number) => {
  let result = 1
  for (let i = 2; i <= number; i++) {
    result = action === 'sum' ? result + i : result * i
  }
  return result
}

//-------------------------doubling-----------------------------//
app.get('/doubling', (req, res) => {
  const { query } = req
  res.json(
    query.input
      ? { received: query.input, result: query.input * 2 }
      : { error: 'Please provide an input!' }
  )
})

//---------------------------greeter---------------------------//
app.get('/greeter', (req, res) => {
  const { query } = req
  let resData = {}

  if (query.name && query.title) {
    resData = {
      welcome_message: `Oh, hi there ${query.name}, my dear ${query.title}!`
    }
  } else if (!query.name && query.title) {
    resData = {
      error: 'Please provide a name!'
    }
  } else if (!query.title && query.name) {
    resData = {
      error: 'Please provide a title!'
    }
  } else {
    resData = {
      error: 'Please provide a name and a title!'
    }
  }
  res.json(resData)
})

//------------------------append a------------------------------//
app.get('/appenda/:appendable', (req, res) => {
  const { params } = req
  res.json({
    appended: params.appendable + 'a'
  })
})

//-------------------------do until-----------------------------//
app.post('/dountil/:action', (req, res) => {
  const { params, body } = req
  const number = body.until

  if (number) {
    let resData = {}
    const { action } = params
    switch (action) {
      case 'sum':
        resData = { result: operate(action, number) }
        break
      case 'factor':
        resData = { result: operate(action, number) }
        break
      default:
        resData = { result: number }
        break
    }
    res.json(resData)
  }
  res.json({
    error: 'Please provide a number!'
  })
})

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`)
})
