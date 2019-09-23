import { Printable } from './printable'

class Todo implements Printable {
  private name: string
  private completed: boolean

  constructor(name) {
    this.name = name
    this.completed = false
  }

  complete() {
    this.completed = true
  }

  getName() {
    return this.name
  }

  getCompleted() {
    return this.completed
  }

  printAllFields() {
    console.log(`Left : ${this.name}, right : ${this.completed}`)
  }
}
//test code
let todo1 = new Todo('Get milk')
let todo2 = new Todo('Remove the obstacles')
let todo3 = new Todo('Stand up')

let todos = [todo1, todo2, todo3]
for (let todo of todos) {
  todo.printAllFields()
}
