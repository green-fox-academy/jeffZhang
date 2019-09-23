import { Flyable } from './flyable'
import { Vehicle } from './Vehicle'

class Helicopter extends Vehicle implements Flyable {
  land() {
    console.log('Land.')
  }
  fly() {
    console.log('Fly.')
  }
  takeOff() {
    console.log('Takeoff')
  }
}

let helicopter = new Helicopter()
console.log(helicopter instanceof Vehicle)
