const fetch = require('node-fetch')

//------------------------------------------------------//
//1st way, in async
/*async function f() {
  try {
    let response = await fetch('http://no-such-url')
    let user = await response.json()
  } catch (err) {
    console.log(err.message)
  }
}
f()*/

//2nd way, out async
// async function f() {
//   let response = await fetch('http://no-such-url')
// }

// f().catch(error => {
//   console.log(error.message)
// }) // TypeError: failed to fetch // (*)

//------------------------------------------------------//
const promiseAll = async () => {
  let response = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(res =>
      res.json()
    ),
    fetch('https://jsonplaceholder.typicode.com/todos/2').then(res =>
      res.json()
    ),
    fetch('https://jsonplaceholder.typicode.com/todos/3').then(res =>
      res.json()
    )
  ])
  console.log(response)
}

promiseAll()
