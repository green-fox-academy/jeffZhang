module.exports = class Item {
  constructor(name, price = 1) {
    this.name = name
    this.price = price
  }
  print() {
    return `${this.name} - ${this.price}`
  }
}
