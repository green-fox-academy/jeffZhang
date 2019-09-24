import { QueueInterface } from '../interfaces'
import { Stack } from '../03-Stack/Stack'

class Queue implements QueueInterface {
  inputStack: Stack
  outputStack: Stack

  constructor() {
    this.inputStack = new Stack()
    this.outputStack = new Stack()
  }

  empty(): boolean {
    return this.inputStack.empty() && this.outputStack.empty()
  }

  peek(): string {
    if (this.outputStack.empty()) {
      while (!this.inputStack.empty()) {
        this.outputStack.push(this.inputStack.pop())
      }
    }
    return this.outputStack.peek()
  }

  add(value: string): void {
    this.inputStack.push(value)
  }

  remove(): string {
    this.peek()
    return this.outputStack.pop()
  }
}

let queue = new Queue()
console.log(queue.empty())

for (let i = 0; i < 5; i++) {
  queue.add(i.toString())
}

console.log(queue.peek())
console.log(queue.remove())
console.log(queue.peek())
