'use strict'
const Animal = require('./04-animal')

// Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal

class Farm {
  constructor(slots = 3) {
    this.animals = []
    this.slots = slots > 0 ? slots : 3
  }

  breed(animal) {
    if (this.slots > 0) {
      this.animals.push(animal)
      this.slots -= 1
      return animal
    } else {
      return '!No more place for a new comer...'
    }
  }

  slaughter() {
    if (this.animals.length > 0) {
      let removeIndex = 0,
        removeHungerLevel = Number.MAX_SAFE_INTEGER
      this.animals.forEach((animal, index) => {
        if (animal.hunger < removeHungerLevel) {
          removeIndex = index
          removeHungerLevel = animal.hunger
        }
      })
      this.slots += 1
      return this.animals.splice(removeIndex, 1) 
    } else {
      return '!No animals to slaughter'
    }
  }
}

let farm = new Farm()
console.log(farm)
console.log(farm.breed(new Animal(10, 10)))
farm.animals[0].play()
console.log(farm.breed(new Animal(30, 30)))
console.log(farm.slaughter())
console.log(farm.slaughter())
console.log(farm)
