class Person {
  static planColor(){

  }

  static a = 'f'

  constructor(age = -12, name = 'defaultName') {
    this.name = name
    this.age = age
  }
  greet(person) {
    console.log(`${this.name} says Hello my friend, dear ${person.name}`)
  }
  getName() {
    return this.name
  }
  setName(name) {
    this.name = name
  }
}

Person.fff = 'ff'

module.exports = Person