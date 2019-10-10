let d = document
let button = d.querySelector('button')

//first method
// let count = 0
// button.addEventListener('click', event => {
//   if (count === 0) {
//     console.log(event.timeStamp)
//     count++
//   }
// })

//second method
button.addEventListener('click', () => {
  console.log(event.timeStamp)
  button.toggleAttribute('disabled')
})
