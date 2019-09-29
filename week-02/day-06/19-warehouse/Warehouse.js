const Item = require('./Item')
const Tool = require('./Tool')
const Toy = require('./Toy')

class Warehouse {
  constructor() {
    this.itemList = []
  }
  addItem(item) {
    this.itemList.push(item)
  }
  printItemsOfType(isType) {
    console.log(this.itemList.filter(item => item instanceof isType))
  }
}

const wh = new Warehouse()
wh.addItem(new Item('vase', 30))
wh.addItem(new Toy('pebble', undefined, 'grey'))
wh.addItem(new Toy('car', 10, 'blue'))
wh.addItem(new Tool('hammer', 25))
wh.printItemsOfType(Item)
wh.printItemsOfType(Toy)
wh.printItemsOfType(Tool)
