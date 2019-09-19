'use strict'
const Pirate = require('./Pirate')

class Ship {
  constructor() {
    this.crew = []
    this.captain = undefined

    this.didBattle = false
    this.rumCount = 0
  }

  get aliveCrewCount() {
    let aliveCount = 0
    this.crew.forEach(pirate => {
      if (pirate.alive) {
        aliveCount++
      }
    })
    return aliveCount
  }

  get score() {
    return this.captain
      ? this.aliveCrewCount - this.captain.drinkTimes
      : Number.MIN_SAFE_INTEGER
  }

  lose() {
    if (this.didBattle) {
      let randomDieNumber = Math.floor(Math.random() * this.aliveCrewCount + 1)
      while (randomDieNumber > 0) {
        for (let i = 0; i < this.crew.length; i++) {
          if (this.crew[i].alive) {
            this.crew[i].die()
            randomDieNumber--
          }
          if (!randomDieNumber) {
            break
          }
        }
      }
      this.didBattle = false
    } else {
      console.log('!Please battle with another ship first.')
    }
  }

  win() {
    if (this.didBattle) {
      this.rumCount += Math.ceil(Math.random() * 9)
      this.didBattle = false
    } else {
      console.log('!Please battle with another ship first.')
    }
  }

  fillShip() {
    let numberOfPirates = Math.floor(Math.random() * 9)
    for (let i = 0; i < numberOfPirates; i++) {
      this.crew.push(new Pirate())
    }
    this.captain = new Pirate()
  }

  printShip() {
    if (!this.captain) {
      console.log(
        '!No pirates onboard, you have to fill this ship first with pirates.'
      )
    } else {
      console.log('Captain')
      console.table(this.captain)
      console.log('Alive crew number: ', this.aliveCrewCount)
    }
  }

  battle(otherShip) {
    this.didBattle = true
    this.score > otherShip.score ? this.win() : this.lose()
    return this.score > otherShip.score
  }
}

let ship1 = new Ship()
let ship2 = new Ship()

ship1.fillShip()
ship1.printShip()

ship2.fillShip()
ship2.printShip()

ship1.battle(ship2)
ship1.printShip()
ship2.printShip()

ship2.lose()