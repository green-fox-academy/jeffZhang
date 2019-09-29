;(function() {
  const Garden = require('../02-class/before-es6')

  function PlayGround(width, length, toys) {
    Garden.call(this, width, length)
    this.toys = toys
  }
  PlayGround.prototype = Object.create(Garden.prototype)
  PlayGround.prototype.constructor = PlayGround

  PlayGround.prototype.add = function(toy) {
    this.toys.push(toy)
  }

  let playGround = new PlayGround(7, 7, ['doll-1', 'doll-2', 'doll-3'])
  playGround.add('new-doll')
  console.log(playGround.area())
  console.log(playGround)
  console.log(playGround instanceof Garden)
  console.log(playGround instanceof PlayGround)
})()
