'use strict'

let drinks = ['cola', 'sprite', 'fanta', 'pepsi', 'monster']
drinks.push('milk')
console.log(drinks)

console.log(drinks.pop())

console.log(drinks)

console.log(drinks.indexOf('fanta'))

console.log(drinks.slice(2, 4))

drinks.forEach(function(drink) {
  console.log(drink)
})

console.log(
  drinks.filter(function(drink) {
    return drink.startsWith('p')
  })
)
