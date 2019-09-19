'use strict'
const Student = require('./Student')
const Teacher = require('./Teacher')

let student = new Student()
let teacher = new Teacher()

student.question(teacher)
teacher.teach(student)
