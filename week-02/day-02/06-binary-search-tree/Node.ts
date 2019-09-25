export class NodeClass {
  leftNode: NodeClass | null
  rightNode: NodeClass | null
  data: string

  constructor(value: string) {
    this.data = value
  }

  insert(value: string): void {
    if (this.data <= value) {
      if (!this.leftNode) {
        this.leftNode = new NodeClass(value)
      } else {
        this.leftNode.insert(value)
      }
    } else {
      if (!this.rightNode) {
        this.rightNode = new NodeClass(value)
      } else {
        this.rightNode.insert(value)
      }
    }
  }

  contains(value: string): boolean {
    if (this.data === value) {
      return true
    } else if (value < this.data) {
      if (!this.leftNode) {
        return false
      } else {
        return this.leftNode.contains(value)
      }
    } else {
      if (!this.rightNode) {
        return false
      } else {
        return this.rightNode.contains(value)
      }
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
