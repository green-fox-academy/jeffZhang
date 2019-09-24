import { StackInterface } from '../interfaces'
import { NodeClass } from '../NodeClass'

export class Stack implements StackInterface {
  head: NodeClass | null

  constructor() {
    this.head = null
  }

  empty(): boolean {
    return !this.head
  }

  peek(): string {
    if (!this.head) {
      return '!Empty list, nothing can be peeked.'
    }

    return this.head.data
  }

  push(value: string): void {
    let newNode = new NodeClass(value)
    if (!this.head) {
      this.head = newNode
      return
    }

    newNode.next = this.head
    this.head = newNode
  }

  pop(): string {
    if (!this.head) {
      return '!Empty list, nothing can be popped out.'
    }
    let tempHead = this.head
    this.head = this.head.next
    return tempHead.data
  }
}

let stack = new Stack()
console.log(stack.pop())
console.log(stack.peek())

for (let i = 0; i < 5; i++) {
  stack.push(i.toString())
}

console.log(stack)
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())
for (let j = 0; j < 10; j++) {
  console.log(stack.pop())
}
