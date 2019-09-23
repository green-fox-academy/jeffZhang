//class Animal copied from 02-zoo
import { Flyable } from './flyable'

abstract class Animal {
  protected name: string
  protected age: number

  getName(): string {
    return this.name
  }

  abstract breed()
}

export class Bird extends Animal implements Flyable {
  breed() {
    return 'laying eggs.'
  }
  land() {
    console.log('Bird Land.')
  }
  fly() {
    console.log('Bird Fly.')
  }
  takeOff() {
    console.log('Bird Takeoff')
  }
}

let bird = new Bird()
console.log(bird instanceof Animal)
