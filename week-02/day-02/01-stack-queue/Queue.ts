import { QueueInterface } from '../interfaces'

class Queue implements QueueInterface {
  private data: string[]
  constructor() {
    this.data = []
  }

  empty() {
    return !this.data.length
  }

  peek() {
    return this.data.length ? this.data[this.data.length - 1] : null
  }

  add(value: string) {
    this.data.push(value)
  }

  remove() {
    if (this.data.length) {
      return this.data.shift()
    }
    throw new Error('!No element can be popped out.')
  }
}
