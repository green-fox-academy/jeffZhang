'use strict'

const Garden = require('./Garden')

let flowerColors = ['yellow', 'blue']
let treeColors = ['purple', 'orange']

let garden = new Garden(flowerColors, treeColors)
garden.water(40)
garden.water(70)