class Person {
  //this three statements are just decalaration of fields, not initialization
  private name: string
  private age: number
  protected skills: string[]

  constructor(name: string, age?: number) {
    this.name = name
    this.age = age
    this.skills = []
  }

  addSkill(input: string): string {
    this.skills.push(input)
    return 'The skill has been added.'
  }

  printName() {
    return `This person's name : ${this.name}`
  }

  setAge(age: number) {
    this.age = age
  }

  printSkills(): string {
    return `This person's name: ${this.name}`
  }
}

class Student extends Person {
  constructor(name: string, age: number) {
    super(name, age)
  }
}

const person1 = new Person('Jeff', 27)
console.log(person1.addSkill('JS'))
