'use strict'

const Domino = require('./domino')

function initializeDominoes() {
  const dominoes = []
  dominoes.push(new Domino(5, 2))
  dominoes.push(new Domino(4, 6))
  dominoes.push(new Domino(1, 5))
  dominoes.push(new Domino(6, 7))
  dominoes.push(new Domino(2, 4))
  dominoes.push(new Domino(7, 1))
  return dominoes
}

const dominoes = initializeDominoes()
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

const isAdjacent = (domino1, domino2) => {
  return domino1.values[1] === domino2.values[0]
}

const orderDominoes = dominoes => {
  for (let i = 0; i < dominoes.length - 1; i++) {
    if (i === dominoes.length - 2) {
      break
    }
    if (isAdjacent(dominoes[i], dominoes[i + 1])) {
      continue
    }
    for (let j = i + 2; j < dominoes.length; j++) {
      if (isAdjacent(dominoes[i], dominoes[j])) {
        let tempDomino = dominoes[i + 1]
        dominoes[i + 1] = dominoes[j]
        dominoes[j] = tempDomino
      }
    }
  }
}

orderDominoes(dominoes)
console.log(dominoes.toString())
