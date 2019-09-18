let myNewObject = {
  first: 'Apple',
  second: 'Plum',
  third: 'Melon'
}

console.log(myNewObject.first)

const searchInput = 'first'
console.log(myNewObject[searchInput])

console.log(Object.keys(myNewObject))
console.log(Object.values(myNewObject))

console.log(myNewObject.hasOwnProperty('fifth'))
