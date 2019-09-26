class Plant {
  constructor(color, threshold, absorbation) {
    this.color = color
    this.waterAmount = 0
    this.threshold = threshold
    this.absorbation = absorbation
  }

  isThirsty() {
    return this.waterAmount < this.threshold
  }

  water(amount) {
    this.waterAmount += amount * this.absorbation
  }

  status() {
    console.log(
      `The ${this.color} ${this.constructor.name} ${
        this.isThirsty() ? 'needs' : 'doesnt need'
      } water`
    )
  }
}

class Flower extends Plant {
  constructor(color) {
    super(color, 5, 0.75)
  }
}

class Tree extends Plant {
  constructor(color) {
    super(color, 10, 0.4)
  }
}

module.exports = { Flower, Tree }
