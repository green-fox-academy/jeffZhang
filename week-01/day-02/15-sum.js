'use strict'

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result
const number = 10
const sum = function(number) {
  let sumAll = 0
  for (let i = 0; i <= number; i++) {
    sumAll += i
  }
  return sumAll
}

console.log(sum(number))
