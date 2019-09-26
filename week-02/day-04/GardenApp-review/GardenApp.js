const Garden = require('./Garden')
const { Flower, Tree } = require('./Plant')

let garden = new Garden()

let yellow = new Flower('yellow')
let blue = new Flower('blue')
let purple = new Tree('purple')
let orange = new Tree('orange')

garden.add(yellow)
garden.add(blue)
garden.add(purple)
garden.add(orange)

garden.status()

garden.water(40)
garden.status()

garden.water(70)
garden.status()
