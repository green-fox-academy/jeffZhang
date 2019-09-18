'use strict'

// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)

const printer = function(...parameters){
    console.log(parameters)
}

printer(1,2,3,4)