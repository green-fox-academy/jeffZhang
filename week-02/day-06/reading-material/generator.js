function* calculator(input) {
  var doubleThat = 2 * (yield input / 2)
  var another = yield doubleThat
  return input * doubleThat * another
}

const calc = calculator(10)
console.log(calc.next())
console.log(calc.next(7))
console.log(calc.next(100))
