'use strict'

// - Create a variable named `animals`
//   with the following content: `['dog', 'cat', 'kitten']`
// - Add all elements an `'s'` at the end
// - try to use built in functions instead of loops

const animals = ['dog', 'cat', 'kitten']
animals.forEach((ele, index, arr) => {
  arr[index] = ele + 's'
})
console.log(animals)
