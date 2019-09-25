import { TreeInterface } from '../interfaces'
import { NodeClass } from './Node'

class BinarySearchTree implements TreeInterface {
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
    } else if (value < node.data) {
      node.leftNode = this.remove(value, node.leftNode)
      return node
    } else if (value > node.data) {
      node.rightNode = this.remove(value, node.rightNode)
      return node
    } else {
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
    }
  }

  search(value: string): boolean {
    return this.root ? this.root.contains(value) : false
  }
}
