'use strict'

// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

class Counter {
  constructor(integer = 0) {
    this.integer = integer
    this.initial = integer
  }
  add(value = 1) {
    this.integer += value
  }
  get() {
    return this.integer.toString()
  }
  reset() {
    this.integer = this.initial
  }
}

let counter = new Counter(4)
counter.add(5)
console.log(counter.get())
counter.reset()
console.log(counter)
