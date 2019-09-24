import { StackInterface } from '../interfaces'

class Stack implements StackInterface {
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

  push(value: string) {
    this.data.push(value)
  }

  pop() {
    if (this.data.length) {
      return this.data.pop()
    }
    throw new Error('!No element can be popped out.')
  }
}
