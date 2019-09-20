const Plants = require('./Plants')

class Garden {
  constructor(flowerColors = [], treeColors = []) {
    this.flowers = flowerColors.length
      ? flowerColors.map(color => new Plants.Flower(color))
      : []

    this.trees = treeColors.length
      ? treeColors.map(color => new Plants.Tree(color))
      : []    
  }

  get thirstyFlowerNumber() {
    let count = 0
    if (!this.flowers.length) {
      return 0
    }
    this.flowers.forEach(flower => {
      if (flower.thirst) {
        count++
      }
    })
    return count
  }

  get thirstyTreesNumber() {
    let count = 0
    if (!this.trees.length) {
      return 0
    }
    this.trees.forEach(tree => {
      if (tree.thirst) {
        count++
      }
    })
    return count
  }

  water(amount) {
    console.log(`Watering with ${amount}`)

    let waterToEachPlant =
      amount / (this.thirstyFlowerNumber + this.thirstyTreesNumber)

    this.flowers.forEach(flower => {
      if (flower.thirst) {
        flower.getWater(waterToEachPlant)
      }
      flower.printStatus()
    })

    this.trees.forEach(tree => {
      if (tree.thirst) {
        tree.getWater(waterToEachPlant)
      }
      tree.printStatus()
    })
  }
}

module.exports = Garden
