'use strict'
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

var quote =
  "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law."

let indexOfFirstYou = quote.indexOf('you')
let beforeYouPart = quote.slice(0, indexOfFirstYou)
let restPart = quote.slice(indexOfFirstYou)
quote = beforeYouPart + 'always takes longer than ' + restPart

console.log(quote)
