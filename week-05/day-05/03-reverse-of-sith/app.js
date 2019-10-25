const PORT = 3000
const express = require('express')

const app = express()

app.use(express.json())

//------------------------helpers------------------------------//
const captitalizeInitial = text => {
  return text.charAt(0).toUpperCase() + text.substring(1)
}

const lowercaseInitial = text => {
  return text.charAt(0).toLowerCase() + text.substring(1)
}

//only two random cases, add more if necessary
const makeRandomWords = (extraChar = '') => {
  let randomNumber = Math.random()
  if (randomNumber > 0.5) {
    return extraChar + ' Arrgh. Uhmm.'
  }
  return extraChar + ' Err..err.err.'
}

const orderSentence = sentence => {
  let words = sentence.split(' ')
  if (words.length === 1) {
    return sentence
  }

  for (let i = 0; i < words.length - 1; i += 2) {
    if (i === 0) {
      words[i] = lowercaseInitial(words[i])
      words[i + 1] = captitalizeInitial(words[i + 1])
    }

    let temp = words[i]
    words[i] = words[i + 1]
    words[i + 1] = temp
  }
  return words.join(' ')
}

const makeSithText = text => {
  let sentences = text.split('. ')

  for (let i = 0; i < sentences.length; i++) {
    sentences[i] =
      orderSentence(sentences[i]) +
      makeRandomWords(i !== sentences.length - 1 ? '.' : '')
  }

  return sentences.join(' ')
}

console.log(makeSithText('This is my example sentence. Just for fun.'))

//-------------------------post response-----------------------------//
app.post('/sith', (req, res) => {
  const { body } = req
  const { text } = body
  if (text) {
    res.json({
      sith_text: makeSithText(text)
    })
  }
  res.json({
    error: 'Feed me some text you have to, padawan young you are. Hmmm.'
  })
})

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`)
})
