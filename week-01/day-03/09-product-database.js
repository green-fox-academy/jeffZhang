'use strict'

//We are going to represent our products in a map where the keys are strings representing the product's name and the values are numbers representing the product's price.
//Create a map with the following key-value pairs.
//Product name (key)	Price (value)
// Eggs	200
// Milk	200
// Fish	400
// Apples	150
// Bread	50
// Chicken	550
let products = new Map([
  ['Eggs', 200],
  ['Milk', 200],
  ['Fish', 400],
  ['Apples', 150],
  ['Bread', 50],
  ['Chicken', 550]
])

//Create an application which solves the following problems.

// How much is the fish?
console.log(products.get('Fish'))

// What is the most expensive product?
let mostExpensive = 0
let expensiveName = ''
products.forEach((price, name) => {
  if (price > mostExpensive) {
    mostExpensive = price
    expensiveName = name
  }
})
console.log(expensiveName)

// What is the average price?
let sumPrice = 0
products.forEach(price => {
  sumPrice += price
})
console.log(parseFloat((sumPrice / products.size).toFixed(2)))

// How many products' price is below 300?
let countLow = 0
products.forEach(price => {
  if (price < 300) {
    countLow++
  }
})
console.log(countLow)

// Is there anything we can buy for exactly 125?
let exactNumber = false
products.forEach(price => {
  if (price === 125) {
    exactNumber = true
  }
})
console.log(exactNumber)

// What is the cheapest product?
let cheapest = Number.MAX_SAFE_INTEGER
let cheapestName = ''
products.forEach((price, name) => {
  if (price < cheapest) {
    cheapest = price
    cheapestName = name
  }
})
console.log(cheapestName)
