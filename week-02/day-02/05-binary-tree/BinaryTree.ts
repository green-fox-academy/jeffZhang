import { TreeInterface } from '../interfaces'
import { NodeClass } from './Node'

class BinaryTree implements TreeInterface {
  root: NodeClass | null

  constructor(value: string) {
    this.root = null
  }

  empty(): boolean {
    return !this.root
  }

  add(value: string): void {
    if (!this.root) {
      this.root = new NodeClass(value)
    } else {
      this.root.insert(value)
    }
  }

  remove(value: string, node: NodeClass = this.root): NodeClass | null {
    if (!node) {
      return null
    } else if (node.data === value) {
      // No children
      //case 1 - a leaf node
      if (node.leftNode === null && node.rightNode === null) {
        node = null
        return node
      }
      // Single Child cases
      if (node.leftNode === null) return node.rightNode
      if (node.rightNode === null) return node.leftNode

      // Both children, so need to find successor
      let currNode = node.rightNode
      while (currNode.leftNode !== null) {
        currNode = currNode.leftNode
      }
      node.data = currNode.data
      // Delete the value from right subtree.
      node.rightNode = this.remove(currNode.data, node.rightNode)
      return node
    } else {
      node.leftNode = this.remove(value, node.leftNode)
      node.rightNode = this.remove(value, node.rightNode)
    }
  }

  search(value: string): boolean {
    return this.root ? this.root.contains(value) : false
  }
}
