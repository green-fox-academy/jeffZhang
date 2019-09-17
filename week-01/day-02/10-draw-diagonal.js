'use strict'

const lineCount = 6

// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is
for (let i = 1; i <= lineCount; i++) {
  if (i === 1 || i === lineCount) {
    console.log('%'.repeat(lineCount))
  } else {
    let leftBlankPart = ' '.repeat(i - 2)
    let rightBlankPart = ' '.repeat(lineCount - i - 1)
    let output = '%' + leftBlankPart + '%' + rightBlankPart + '%'
    console.log(output)
  }
}
