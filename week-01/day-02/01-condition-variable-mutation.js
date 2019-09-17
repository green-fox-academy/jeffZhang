'use strict'

'use strict'

const a = 24
let out = 0
// if a is even increment out by one
if (!(a % 2)) {
  out++
}

console.log(out)

const b = 13
let out2 = ''
// if b is between 10 and 20 set out2 to 'Sweet!'
// if less than 10 set out2 to 'More!',
// if more than 20 set out2 to 'Less!'
if (10 <= b && b <= 20) {
  out2 = 'Sweet!'
} else if (b < 10) {
  out2 = 'More!'
} else {
  out2 = 'Less!'
}

console.log(out2)

let c = 123
const credits = 100
const isBonus = false
// if credits are at least 50,
// and isBonus is false decrement c by 2
// if credits are smaller than 50,
// and isBonus is false decrement c by 1
// if isBonus is true c should remain the same
if (!isBonus && credits >= 50) {
  c -= 2
} else if (!isBonus && credits < 50) {
  c -= 1
}

console.log(c)

const d = 8
const time = 120
let out3 = ''
// if d is dividable by 4
// and time is not more than 200
// set out3 to 'check'
// if time is more than 200
// set out3 to 'Time out'
// otherwise set out3 to 'Run Forest Run!'
if (time <= 200 && !(d % 4)) {
  out3 = 'check'
} else {
  out3 = 'Run Forest Run!'
}

console.log(out3)
