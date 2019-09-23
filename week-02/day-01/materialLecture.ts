enum Color {
  Red,
  Green,
  Yellow
}

console.log(Color.Green) //find number
console.log(Color[1]) //find name
//===================
class AppContext {
  private static _instance: AppContext = new AppContext()

  private AppContext() {} //I assume it should be constructor instead of AppContext

  public static getInstance(): AppContext {
    return AppContext._instance
  }

  getData(): any {
    return 'test data'
  }
}

let data = AppContext.getInstance().getData()
console.log(data)
//======================
class Person {
  protected _name: string
  protected _age: number

  protected constructor(name: string, age: number) {
    this._name = name
    this._age = age
  }

  protected displayAsString(): void {
    console.log(this)
  }
}

class Employee extends Person {
  private _salary: number

  constructor(name: string, age: number, salary: number) {
    super(name, age)
    this._salary = salary
  }

  public display(): void {
    super.displayAsString()
  }
}

//let person: Person = new Person("Ashlee", 23); error TS2674: Constructor of class 'Person' is protected and
// only accessible within the class declaration.
let emp: Employee = new Employee('Ashlee', 23, 3000)
//emp.displayAsString();  error TS2445: Property 'displayAsString' is protected and only accessible within
// class 'Person' and its subclasses.
emp.display()
//======================
type longHand = {
  (a: number): number
}

type shortHand = (a: number) => number

const testFunc: longHand = (parameter: number) => {
  return parameter + 1
}

console.log(testFunc(5))
//=================
interface RectangleOptions {
  width: number
  length: number
  height?: number
}

function drawRectangle(options: RectangleOptions) {
  let width = options.width
  let length = options.length
  if (options.height) {
    let height = options.height
    //draw a 3D rectangle
  }
  //draw a 2D rectangle
}

drawRectangle({ width: 2, length: 3 })
//================
function theCityThatAlwaysSleeps(name: string) {
  let getCity

  if (name === 'Sea') {
    let city = 'Seattle'
    getCity = function() {
      return city
    }
  }

  return getCity()
}
console.log(theCityThatAlwaysSleeps('Sea'))
//=================
let defaults = { food: 'spicy', price: '$$', ambiance: 'noisy' }
let search = { food: 'rich', ...defaults }
console.log(search)
//=================
interface ClockConstructor {
  new (hour: number, minute: number)
  printStatus(): void
}

interface ClockInterface {
  tick()
}

const Clock: ClockConstructor = class Clock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('beep beep')
  }
  static printStatus() {
    console.log('this is Clock')
  }
}
let clock = new Clock(3, 4)
Clock.printStatus()
