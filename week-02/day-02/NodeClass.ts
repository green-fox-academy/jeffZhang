export class NodeClass {
  data: string
  next: NodeClass | null

  constructor(value: string) {
    this.data = value
    this.next = null
  }
}
