'use strict'

const lineCount = 4

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (let i = 0; i < lineCount; i++) {
  let blankPart = ' '.repeat(lineCount - i)
  let output = blankPart + '*'.repeat(i * 2 + 1) + blankPart
  console.log(output)
}
