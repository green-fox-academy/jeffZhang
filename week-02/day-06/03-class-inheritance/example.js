// this is the base class
function Person(fName, lName) {
  this.firstName = fName
  this.lastName = lName
}
Person.prototype.getFullName = function() {
  return this.firstName + ' ' + this.lastName
}
// this is the child class
function Employee(fName, lName, eId) {
  Person.call(this, fName, lName)
  this.empId = eId
}
// we need to set the class prototype for inheritance
Employee.prototype = Object.create(Person.prototype)
// Employee.prototype.__proto__ = Person.prototype
// does the same as Employee.prototype = Object.create(Person.prototype)

// we have reassigned the constructor so we need to set it back
Employee.prototype.constructor = Employee
// this is a new function for the inherited class
Employee.prototype.getEmpInfo = function() {
  return [this.empId, this.firstName, this.lastName]
}
var e1 = new Employee('Jhon', 'Doe', 10)
e1.getFullName()
e1.getEmpInfo()
console.log(e1 instanceof Person)
console.log(e1 instanceof Employee)
