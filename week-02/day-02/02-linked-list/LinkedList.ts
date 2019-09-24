import { LinkedListInterface } from '../interfaces'
import { NodeClass } from '../NodeClass'

class LinkedList implements LinkedListInterface {
  head: NodeClass | null

  constructor() {
    this.head = null
  }

  append(value: string): void {
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

  prepend(value: string): void {
    let newHead = new NodeClass(value)
    newHead.next = this.head
    this.head = newHead
  }

  getNode(index: number): NodeClass | null {
    let counter = 0
    let node = this.head

    while (node) {
      if (counter === index) {
        return node
      }
      counter++
      node = node.next
    }
    return null
  }

  insert(value: string, index: number): void {
    if (!this.head || index >= this.size()) {
      this.append(value)
      return
    }

    if (index <= 0) {
      this.prepend(value)
      return
    }

    const previous = this.getNode(index - 1)
    let newNode = new NodeClass(value)
    newNode.next = previous.next
    previous.next = newNode
  }

  add(value: string, index?: number): void {
    if (!index) {
      this.append(value)
      return
    }
    this.insert(value, index)
  }

  get(index: number): string {
    return this.getNode(index)
      ? this.getNode(index).data
      : '!Get nothing from an empty node.'
  }

  removeItem(value: string): void {
    if (!this.head) {
      console.log('!Empty list')
      return
    }
    if (value === this.head.data) {
      this.head = this.head.next
      return
    }

    let currentNode = this.head
    while (currentNode.next) {
      if (currentNode.next.data === value) {
        currentNode.next = currentNode.next.next
        return
      }
      currentNode = currentNode.next
    }
  }

  remove(index: number): string {
    let removedElementData = '!No element in this list.'
    if (!this.head) {
      return removedElementData
    }

    // node needs to be deleted from the front of the list i.e. before the head.
    if (index <= 0) {
      removedElementData = this.head.data
      this.head = this.head.next
      return removedElementData
    }
    // else, use getNode() to find the previous node.
    const previous = this.getNode(index - 1)

    if (!previous || !previous.next) {
      removedElementData = '!Index to null element.'
      return removedElementData
    }

    removedElementData = previous.next.data
    previous.next = previous.next.next
    return removedElementData
  }

  size(): number {
    if (!this.head) {
      return 0
    }
    let counter = 0,
      currentNode = this.head
    while (currentNode) {
      counter++
      currentNode = currentNode.next
    }
    return counter
  }
}

let list = new LinkedList()
console.log(list.size())

for (let i = 0; i < 5; i++) {
  list.add(i.toString())
}
console.log(list.size())
console.log(list.remove(10))
list.removeItem('10')
list.removeItem('3')
console.log(list.remove(2))
console.log(list.size())
