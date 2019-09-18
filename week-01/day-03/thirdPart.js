let a = 10

let b = a
a = 20

console.log(b)

let firstObject = {
  name: 'jeff'
}

let secondObject = firstObject
firstObject.name = 'jeff'

console.log(firstObject.name)
console.log(secondObject.name)

let animals = ['Dog', 'Cat', 'Parrot']
let [firstAnimal, secondAnimal, thirdAnimal] = animals
console.log(firstAnimal)

let person = {
  name: 'jeff',
  age: 27,
  hair: true
}

let { name, age, hair } = person
console.log(hair)
