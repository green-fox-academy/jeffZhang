'use strict'

const mapWith = (array, callback) => {
  let output = []

  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.

  array.forEach(element => {
    output.push(callback(element))
  })

  return output
}

const addOne = number => {
  return number + 1
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne))
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter']

const removeSecondLetter = str => {
  let strArray = str.split('')
  let newStrArray = strArray.map((char, index) => {
    return index % 2 ? '' : char
  })
  let newStr = newStrArray.join('')
  return newStr
}

console.log(mapWith(words, removeSecondLetter))
// expected result: ['mp','rdc', 'fle']
