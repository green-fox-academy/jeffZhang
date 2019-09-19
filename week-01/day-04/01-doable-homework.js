'use strict'
// Create 5 trees
// Store the data of them in variables in your program
// for every tree the program should store its'
// type
// leaf color
// age
// sex
// you can use just variables, or lists and/or maps

let tree1 = { type: 't1', color: 'c1', age: 1, sex: 's1' }
let tree2 = { type: 't2', color: 'c2', age: 2, sex: 's2' }
let tree3 = { type: 't3', color: 'c3', age: 3, sex: 's3' }
let tree4 = { type: 't4', color: 'c4', age: 4, sex: 's4' }
let tree5 = { type: 't5', color: 'c5', age: 5, sex: 's5' }

let trees = new Map([
  ['tree1', tree1],
  ['tree2', tree2],
  ['tree3', tree3],
  ['tree4', tree4],
  ['tree5', tree5]
])

console.log(trees)
