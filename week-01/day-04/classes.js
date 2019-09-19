const Person = require('./Person')
const readline = require('readline')

let jeff = new Person()
console.log(jeff)
console.log(Person.planColor)
console.log(Person.fff)
console.log(Person.a)

const rl = readline.createInterface(process.stdin, process.stdout)
rl.prompt()
rl.on('line',line=>{
    console.log('a line input')
}).on(
    'close',()=>{
        process.exit()
    }
)