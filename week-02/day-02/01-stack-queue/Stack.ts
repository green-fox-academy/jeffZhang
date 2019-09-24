import { StackInterface } from '../interfaces'

class Stack implements StackInterface {
  private data: string[]

  constructor() {
    this.data = []
  }

  empty(): boolean {
    return !this.data.length
  }

  peek(): string {
    return this.data.length
      ? this.data[this.data.length - 1]
      : '!No data to peek'
  }

  push(value: string): void {
    this.data.push(value)
  }

  pop(): string {
    if (this.data.length) {
      return this.data.pop()
    }
    return '!No element can be popped out.'
  }
}
