'use strict'

// - Create variable named `al` and assign the value `EPAM` to it
// - Create a function called `greet` that greets it's input parameter
//     - Greeting is printing e.g. `Greetings, dear EPAM`
//     - Prepare for the special case when no parameters are given
// - Greet `al`

const al = 'EPAM'
const greet = function(parameter = 'default'){
    console.log(`Greetings, dear ${parameter}`)
}

greet(al)