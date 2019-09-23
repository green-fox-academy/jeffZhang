interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface
}

interface ClockInterface {
  tick(): void
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute)
}

const DigitalClock: ClockConstructor = class implements ClockInterface {
  constructor(h: number, m: number) {}
  tick(): void {
    console.log('beep beep')
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick(): void {
    console.log('tick tack')
  }
}

const digital = createClock(DigitalClock, 12, 17)
const analog = createClock(AnalogClock, 7, 32)
console.log(digital)
console.log(analog)

//================abstract class================
abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log(`Department name: ${this.name}`)
  }

  abstract printMeeting(): void // must be implemented in derived classes
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing') // constructors in derived classes must call super()
  }

  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.')
  }

  generateReports(): void {
    console.log('Generating accounting reports...')
  }
}

let department: Department // ok to create a reference to an abstract type
// department = new Department() // error: cannot create an instance of an abstract class
department = new AccountingDepartment() // ok to create and assign a non-abstract subclass
department.printName()
department.printMeeting()
// department.generateReports() // error: method doesn't exist on declared abstract type
