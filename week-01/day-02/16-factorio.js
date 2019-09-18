'use strict'

// - Create a function called `factorio`
//   that returns it's input's factorial
const number = 4

const factorio = function(number){
    if(number === 0 || number === 1){
        return 1
    }else{
        return number*factorio(number-1)
    }
}

console.log(factorio(number))