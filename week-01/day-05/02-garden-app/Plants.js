class Plant {
  constructor(color, waterAmount = 0) {
    this.color = color
    this.waterAmount = waterAmount

    switch (this.constructor) {
      case Flower:
        this.absorb = 0.75
        this.threshold = 5
        break
      case Tree:
        this.absorb = 0.4
        this.threshold = 10
        break
      default:
        this.absorb = 0
        this.threshold = Number.MAX_SAFE_INTEGER
        break
    }
    this.printStatus()
  }

  getWater(waterAmount) {
    this.waterAmount += waterAmount * this.absorb
  }

  get thirst() {
    return this.waterAmount < this.threshold
  }

  printStatus() {
    console.log(
      `The ${this.color} ${this.constructor.name} ${
        this.thirst ? 'needs water' : 'doesnt need water'
      }`
    )
  }
}

class Flower extends Plant {
  constructor(color, waterAmount = 0) {
    super(color, waterAmount)
  }
}

class Tree extends Plant {
  constructor(color, waterAmount = 0) {
    super(color, waterAmount)
  }
}

module.exports = { Flower, Tree }
