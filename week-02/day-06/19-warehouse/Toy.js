const Item = require('./Item')

module.exports = class Toy extends Item {
  constructor(name, price, color) {
    super(name, price)
    this.color = color
  }
}
