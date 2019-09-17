'use strict'

//if condition
let condition = true
if (condition) {
  console.log('Hello if')
} else {
  console.log('Hello, else')
}

//for loop
for (let i = 0; i < 5; i++) {
  console.log('for again')
}

//while loop
let j=0

while(j<5){
    console.log('while loop')
    j++
}

//break
let fruits = ['apple', 'banana', 'plum', 'wiki']
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === 'banana') {
        console.log('Banana is in the fruits')
        break
    }

}

//function
function greet(name, age = 0){
    console.log(`Greeting, dear ${name}`)
}
greet('Jeff')


//anoymous function
let otherGreet = function(name){
    console.log(`Greetings, dear ${name}`)
}

greet('Jeff')
otherGreet('Adam')

//array functions
fruits = fruits.map(
    function(fruit){
        return fruit + '!'
    }
)

