'use strict'

// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

const lineCount = 4

let matrix = []
for (let i = 0; i < 4; i++) {
  matrix[i] = []
  for (let j = 0; j < 4; j++) {
    if (i + j === 3) {
      matrix[i][j] = 1
    } else {
      matrix[i][j] = 0
    }
  }
}

console.log(matrix)
