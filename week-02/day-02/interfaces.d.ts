export interface LinkedListInterface {
  add(value: string, index?: number): void
  get(index: number): string
  removeItem(value: string): void
  remove(index: number): string
  size(): number
}

export interface StackInterface {
  empty(): boolean
  peek(): string
  push(value: string): void
  pop(): string
}

export interface QueueInterface {
  empty(): boolean
  peek(): string
  add(value: string): void
  remove(): string
}

export interface TreeInterface {
  empty(): boolean
  add(value: string): void
  remove(value: string): void
  search(value: string): boolean
}
