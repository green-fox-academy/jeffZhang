const food = {
  init: function(type) {
    this.type = type
  },
  eat() {
    console.log('you ate the: ' + this.type)
  }
}

food.eat = function() {
  console.log('YOU ATE' + this.type)
}

const waffle = Object.create(food)
waffle.init('waffle')
waffle.eat()

const carrot = Object.create(food)
carrot.init('carrot')
carrot.eat()
