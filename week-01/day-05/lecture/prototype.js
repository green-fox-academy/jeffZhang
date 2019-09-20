let animal = {
  color: 'black',
  name: 'zebra'
}

let obj = Object.create(animal)
console.log(obj)

console.log(animal.isPrototypeOf(obj))

console.log(obj.name) // although obj seems an "empty object", js will still
//find name attribute from prototype of obj (obj.__proto__) which is animal in this case

// Object.setPrototypeOf(animal, obj) //!cyclic error!
