const Item = require('./Item')

module.exports = class Tool extends Item {
  constructor(name, price = 1) {
    super(name, price)
    this.condition = 'good'
  }
}
