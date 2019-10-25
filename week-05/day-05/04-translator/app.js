const PORT = 3000
const express = require('express')

const app = express()

app.use(express.json())

const vowels = ['a', 'e', 'i', 'o', 'u']

const translate = sentence => {
  let chars = sentence.split('')
  let newChars = chars.map(char => {
    if (vowels.includes(char)) {
      char = char + 'l' + char
    }
    return char
  })
  return newChars.join('')
}

//-------------------------post response-----------------------------//
app.post('/translate', (req, res) => {
  const { body } = req
  const { text, lang } = body
  if (text && lang) {
    res.json({
      translated: translate(text),
      lang: 'gibberish'
    })
  }
  res.json({
    error: "I can't translate that!"
  })
})

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`)
})
