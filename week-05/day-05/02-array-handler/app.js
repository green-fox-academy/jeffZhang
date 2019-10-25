const PORT = 3000
const express = require('express')

const app = express()

app.use(express.json())

//------------------------helpers------------------------------//
const sum = array => {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue)
}

const multiply = array => {
  return array.reduce((accumulator, currentValue) => accumulator * currentValue)
}

const double = array => {
  return array.map(number => number * 2)
}

//-------------------------post response-----------------------------//
app.post('/arrays', (req, res) => {
  const { body } = req
  const { what, numbers } = body
  if (what && numbers.length !== 0) {
    switch (what) {
      case 'sum':
        res.json({ result: sum(numbers) })
      case 'multiply':
        res.json({ result: multiply(numbers) })
      case 'double':
        res.json({ result: double(numbers) })
      default:
        res.json({ result: numbers })
    }
  }
  res.json({
    error: 'Please provide what to do with the numbers!'
  })
})

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`)
})
