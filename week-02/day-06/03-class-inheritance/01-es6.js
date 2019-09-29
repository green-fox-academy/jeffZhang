const Garden = require('../02-class/es6-class')

class PlayGround extends Garden {
  constructor(width, length, toys) {
    super(width, length)
    this.toys = toys
  }
  add(toy) {
    this.toys.push(toy)
  }
}

let playGround = new PlayGround(6, 6, ['doll-1', 'doll-2', 'doll-3'])
console.log(playGround)
playGround.add('new-doll')
console.log(playGround)
