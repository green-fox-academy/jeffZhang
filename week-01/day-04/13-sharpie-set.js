'use strict'

// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

class Sharpie {
  constructor(color, width, inkAmount = 100) {
    this.color = color
    this.width = width > 1 ? width : 1
    this.inkAmount = inkAmount > 0 ? inkAmount : 0
  }

  use(amount) {
    amount = amount > 0 ? amount : 0
    if (this.inkAmount < amount) {
      this.inkAmount = 0
      console.log(`Run out of ink, can't use anymore`)
    } else {
      this.inkAmount -= amount
    }
  }
}

class SharpieSet {
  constructor() {
    this.sharpies = []
  }

  set newSharpie(newSharpie) {
    this.sharpies.push(newSharpie)
  }

  countUsable() {
    let count = 0
    this.sharpies.forEach(sharpie => {
      if (sharpie.inkAmount > 0) {
        count++
      }
    })
    return count
  }

  removeTrash() {
    this.sharpies = this.sharpies.filter(sharpie => sharpie.inkAmount > 0)
  }
}

let sharpieSet = new SharpieSet()
sharpieSet.newSharpie = new Sharpie('c1', 1, 4)
sharpieSet.newSharpie = new Sharpie('c2', 2, 4)
sharpieSet.newSharpie = new Sharpie('c3', 3, 4)
console.log(sharpieSet)
sharpieSet.sharpies[0].use(10)
sharpieSet.removeTrash()
console.log(sharpieSet)
