const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Create a promise based version of rl.question so we can use it in async functions
const question = str => new Promise(resolve => rl.question(str, resolve))

let boardSize = 0
let minesNumber = 0
let fieldToReveal = ''

// A list of all the steps involved in our program
const steps = {
  start: async () => {
    return steps.setGameSize()
  },

  setGameSize: async () => {
    boardSize = await question('How big the gameplay should be (n)?\n>')
    if (boardSize <= 0) {
      console.log(`That's not a valid number for the dimension!`)
      return steps.setGameSize()
    }
    return steps.setMinesNumber()
  },

  setMinesNumber: async () => {
    minesNumber = await question(`How many mines you'd like to find (k)?\n>`)
    if (minesNumber <= 0) {
      console.log(`That's not a valid number for the number of mines!`)
      return steps.setMinesNumber()
    }
    return steps.printGameBoard()
  },

  printGameBoard: async () => {
    console.log('print game board.')
    return steps.revealField()
  },

  revealField: async () => {
    fieldToReveal = await question(`What field to reveal?\n>`)
    if (fieldToReveal === 'quit') {
      return steps.end()
    }
    return steps.printGameBoard()
  },

  end: async () => {
    rl.close()
  }
}

steps.start()
