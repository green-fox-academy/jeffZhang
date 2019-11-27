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
const getSum = until => (until * (until + 1)) / 2

const getFactor = until => {
  let factor = 1
  for (let i = 1; i <= until; i++) {
    factor = factor * i
  }
  return factor
}

const mapAction = (action, until) => {
  const actions = {
    sum: getSum,
    factor: getFactor,
    default: until => until
  }
  return parseInt((actions[action] || actions['default'])(until))
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
  res.json(
    params.appendable
      ? {
          appended: params.appendable + 'a'
        }
      : { warning: 'appendable in the path is missing' }
  )
})

//-------------------------do until-----------------------------//
app.post('/dountil/:action', (req, res) => {
  const { params, body } = req

  if (body.until && params.action) {
    res.json({ result: mapAction(params.action, body.until) })
    return
  }
  res.json({
    error: 'Please provide a number!'
  })
})

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`)
})
