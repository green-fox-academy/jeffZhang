//before es6
;(function() {
  function Garden(width, length) {
    this.width = width
    this.length = length
  }

  Garden.prototype.area = function() {
    return this.width * this.length
  }

  Garden.prototype.circumference = function() {
    return this.width * 2 + this.length * 2
  }

  Garden.prototype.efficiency = function() {
    return this.area() / this.circumference()
  }

  let garden = new Garden(5, 10)
  console.log(garden.area())
  console.log(garden.circumference())
  console.log(garden.efficiency())

  module.exports = Garden
})()
