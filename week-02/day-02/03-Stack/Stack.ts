import { StackInterface } from '../interfaces'
import { NodeClass } from '../NodeClass'

class Stack implements StackInterface {
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

    let currentNode = this.head,
      peekedValue = currentNode.data
    while (currentNode) {
      peekedValue = currentNode.data
      currentNode = currentNode.next
    }
    return peekedValue
  }

  push(value: string): void {
    if (!this.head) {
      this.head = new NodeClass(value)
      return
    }

    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = new NodeClass(value)
  }

  pop(): string {
    if (!this.head) {
      return '!Empty list, nothing can be popped out.'
    }

    let previousNode = this.head,
      tempCurrent = this.head,
      currentNode = this.head

    while (currentNode.next) {
      tempCurrent = currentNode
      previousNode = tempCurrent
      currentNode = currentNode.next
    }

    previousNode.next = null
    return currentNode.data
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
