'use strict'

const Carrier = require('./Carrier')
const Aircrafts = require('./Aircraft')

let carrier = new Carrier(5000, 2352)

for (let i = 0; i < 3; i++) {
  carrier.add(new Aircrafts.F35())
}

for (let i = 0; i < 2; i++) {
  carrier.add(new Aircrafts.F16())
}

console.log(carrier.getStatus())
carrier.fill()
console.log(carrier.getStatus())
