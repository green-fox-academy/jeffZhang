'use strict'

let count = 4

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

for (let i = 1; i <= count*2; i++) {
    if (i%2) {
        console.log('% '.repeat(count))
    }else{
        console.log(' %'.repeat(count))
    }
}