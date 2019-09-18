'use strict'

//Create an empty map
let emptyMap = new Map()

//Print out whether the map is empty or not
console.log('empty? ', emptyMap.size === 0)

//Add the following key-value pairs to the map
emptyMap.set(97, 'a')
emptyMap.set(98, 'b')
emptyMap.set(99, 'c')
emptyMap.set(65, 'A')
emptyMap.set(66, 'B')
emptyMap.set(67, 'C')

//Print all the keys
console.log(emptyMap.keys())

//Print all the values
console.log(emptyMap.values())

//Add value D with the key 68
emptyMap.set(68, 'D')

//Print how many key-value pairs are in the map
console.log(emptyMap.size)

//Print the value that is associated with key 99
console.log(emptyMap.get(99))

//Remove the key-value pair where with key 97
emptyMap.delete(97)

//Print whether there is an associated value with key 100 or not
console.log(emptyMap.has(100))

//Remove all the key-value pairs
emptyMap.clear()

console.log(emptyMap)
