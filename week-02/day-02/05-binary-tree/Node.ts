export class NodeClass {
  leftNode: NodeClass | null
  rightNode: NodeClass | null
  data: string

  constructor(value: string) {
    this.data = value
  }

  insert(value: string): void {
    if (!this.leftNode) {
      this.leftNode = new NodeClass(value)
    } else if (!this.rightNode) {
      this.rightNode = new NodeClass(value)
    } else {
      let random = Math.random()
      if (random < 0.5) {
        this.leftNode.insert(value)
      } else {
        this.rightNode.insert(value)
      }
    }
  }

  contains(value: string): boolean {
    if (this.data === value) {
      return true
    } else if (!this.leftNode && !this.rightNode) {
      return false
    } else if (this.leftNode && !this.rightNode) {
      return this.leftNode.contains(value)
    } else if (!this.leftNode && this.rightNode) {
      return this.rightNode.contains(value)
    } else {
      return this.leftNode.contains(value) && this.rightNode.contains(value)
    }
  }

  printInOrder(): void {
    if (this.leftNode) {
      this.leftNode.printInOrder()
    }
    console.log(this.data)

    if (this.rightNode) {
      this.rightNode.printInOrder()
    }
  }
}
