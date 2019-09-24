import { QueueInterface } from '../interfaces'

class Queue implements QueueInterface {
  private data: string[]
  constructor() {
    this.data = []
  }

  empty(): boolean {
    return !this.data.length
  }

  peek(): string {
    return this.data.length ? this.data[0] : '!No data to peek'
  }

  add(value: string): void {
    this.data.push(value)
  }

  remove(): string {
    if (this.data.length) {
      return this.data.shift()
    }
    return '!No element can be removed.'
  }
}
