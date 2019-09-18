const doSomething = callback => {
  callback('Here I am')
  callback('Calling you back')
}

const callback = input => {
  console.log(input)
}

doSomething(callback)

let arr = [1, 2, 3, 4]
arr.forEach(callback)

setTimeout(()=>{
  console.log('1 sec has passed')
},1000)

setTimeout(()=>{
  console.log('0 sec has passed')
},0)

console.log('this will be logged before a setTimeout 0')

let counter = 0
const timer = () =>{
  let interval = setInterval(()=>{
    console.log('after 2 seconds')
    counter ++ 
    if (counter === 2) {
      clearInterval(interval)
    }
  }, 2000)
}

timer()