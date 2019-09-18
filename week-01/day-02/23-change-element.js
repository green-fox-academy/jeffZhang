'use strict'

// - Create an array named `s` with the following content: `[1, 2, 3, 8, 5, 6]`
// - Change the 8 to 4 with the `.map` method
// - Print the fourth element as a test

const s = [1, 2, 3, 8, 5, 6]
const newS = s.map(ele => {
  if (ele === 8) {
    return ele / 2
  }
  return ele
})

console.log(newS[3])
