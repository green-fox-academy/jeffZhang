'use strict'

// - Create an array variable named `ag` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// - Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

const ag = ['Gin', 'Whiskey', 'Wine', 'Beer']

ag.forEach((ele, index, arr) => {
  arr[index] = ele.repeat(2)
})
console.log(ag)