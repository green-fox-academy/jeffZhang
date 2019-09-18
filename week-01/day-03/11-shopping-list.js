'use strict'

// Represent the following products with their prices

// Product	Amount
// Milk	1.07
// Rice	1.59
// Eggs	3.14
// Cheese	12.60
// Chicken Breasts	9.40
// Apples	2.31
// Tomato	2.58
// Potato	1.75
// Onion	1.10

let shoppingList = new Map([
  ['Milk', 1.07],
  ['Rice', 1.59],
  ['Eggs', 3.14],
  ['Cheese', 12.6],
  ['Chicken Breasts', 9.4],
  ['Apples', 2.31],
  ['Tomato', 2.58],
  ['Potato', 1.75],
  ['Onion', 1.1]
])

// Represent Bob's shopping list
// Product	Amount
// Milk	3
// Rice	2
// Eggs	2
// Cheese	1
// Chicken Breasts	4
// Apples	1
// Tomato	2
// Potato	1

let bobList = new Map([
  ['Milk', 3],
  ['Rice', 2],
  ['Eggs', 2],
  ['Cheese', 1],
  ['Chicken Breasts', 4],
  ['Apples', 1],
  ['Tomato', 2],
  ['Potato', 1]
])

// Represent Alice's shopping list
// Product	Amount
// Rice	1
// Eggs	5
// Chicken Breasts	2
// Apples	1
// Tomato	10
let aliceList = new Map([
  ['Rice', 1],
  ['Eggs', 5],
  ['Chicken Breasts', 2],
  ['Apples', 1],
  ['Tomato', 10]
])

// Create an application which solves the following problems.

// How much does Bob pay?
let bobSum = 0
bobList.forEach((amount, product) => {
  bobSum += shoppingList.get(product) * amount
})
console.log("Bob's sum is ", bobSum)

// How much does Alice pay?
let aliceSum = 0
aliceList.forEach((amount, product) => {
  aliceSum += shoppingList.get(product) * amount
})
console.log("Alice's sum is ", aliceSum)

// Who buys more Rice?

const bobBuysMore = product => {
  let bobAmount = bobList.has(product) ? bobList.get(product) : 0,
    aliceAmount = aliceList.has(product) ? aliceList.get(product) : 0
  return bobAmount > aliceAmount
}

console.log((bobBuysMore('Rice') ? 'Bob' : 'Alice') + ' buys more rice')

// Who buys more Potato?
console.log((bobBuysMore('Potato') ? 'Bob' : 'Alice') + ' buys more potato')

// Who buys more different products?
console.log(
  (bobList.size > aliceList.size ? 'Bob' : 'Alice') + ' buys more products'
)

// Who buys more products? (piece)
let bobTotalAmount = 0,
  aliceTotalAmount = 0

bobList.forEach(amount => {
  bobTotalAmount += amount
})
aliceList.forEach(amount => {
  aliceTotalAmount += amount
})

console.log(
  bobTotalAmount > aliceTotalAmount ? 'Bob' : 'Alice' + ' buys more pieces'
)
