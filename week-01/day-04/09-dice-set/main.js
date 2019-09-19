'use strict'

const DiceSet = require('./DiceSet')
// You have a `DiceSet` class which has a list for 6 dice
// You can roll all of them with roll(), do this first to get your array of dices
// Check the current rolled numbers with getCurrent()
// You can reroll with reroll()
// Your task is to roll the dice until all of the dice are 6

const diceSet = new DiceSet()

const rollAll = diceSet => {
  diceSet.roll()
  let dices = diceSet.getCurrent()
  for (let i = 0; i < dices.length; i++) {
    while (dices[i] !== 6) {
      diceSet.reroll(i)
    }
  }
}

rollAll(diceSet)

// console.log(diceSet.roll())
// console.log(diceSet.getCurrent())

// console.log('------------------')

// diceSet.reroll()
// console.log(diceSet.getCurrent())

// console.log('------------------')

// console.log(diceSet.getCurrent(5))
// diceSet.reroll()
// console.log(diceSet.getCurrent())

// console.log('------------------')

// diceSet.reroll(4)
console.log(diceSet.getCurrent())
