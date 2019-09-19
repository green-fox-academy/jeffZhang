'use strict'

// Create a Station and a Car classes
// Station
// gasAmount
// refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
class Station {
  constructor(gasAmount = 100) {
    this.gasAmount = gasAmount > 0 ? gasAmount : 0
  }
  refill(car) {
    if (this.gasAmount >= car.capacity) {
      if (car.capacity > 0) {
        this.gasAmount -= car.capacity
        car.gasAmount += car.capacity
        car.capacity -= car.capacity
      } else {
        console.log('!No need for gas...')
      }
    } else {
      console.log('!Lack of gas for your car...')
    }
  }
}

// Car
// gasAmount
// capacity
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100
class Car {
  constructor(gasAmount = 0, capacity = 100) {
    this.gasAmount = gasAmount > 0 ? gasAmount : 0
    this.capacity = capacity > 0 ? capacity : 0
  }
}

let station = new Station(-10)
let car = new Car()
console.log(car)
console.log(station)
station.refill(car)
console.log(car)
console.log(station)
station.refill(car)
console.log(car)
console.log(station)
