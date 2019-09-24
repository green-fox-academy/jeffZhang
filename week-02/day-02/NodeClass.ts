export class NodeClass {
  data: string
  next: NodeClass | null

  constructor(value: string = 'data') {
    this.data = value
    this.next = null
  }
}
