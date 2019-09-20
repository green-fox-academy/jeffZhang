class Animal {
  constructor(name, color) {
    this.name = name
    this.color = color
  }

  sayHello() {
    return `${this.color} ${this.name} says hello.`
  }
}

class Zebra extends Animal {
  constructor(color) {
    super('haha', color)
  }
}

let animal = new Animal('zebra', 'black')
console.log(animal.sayHello())
let zebra = new Zebra('red')
console.log(zebra.sayHello())

console.log(zebra.__proto__.__proto__)
console.log(Object.values(zebra.__proto__))
