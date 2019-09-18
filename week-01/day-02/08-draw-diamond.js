'use strict'

const lineCount = 7

// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let halfLineCount = Math.round(lineCount / 2)

for (let i = 0; i < lineCount; i++) {
  if (i < halfLineCount) {
    let blankPart = ' '.repeat(halfLineCount - i)
    let output = blankPart + '*'.repeat(i * 2 + 1) + blankPart
    console.log(output)
  } else {
    let blankPart = ' '.repeat(i + 2 - halfLineCount)
    let output =
      blankPart + '*'.repeat(lineCount * 2 - 2 * i - 1) + blankPart
    console.log(output)
  }
}
