const d = document
const button = d.querySelector('button')

let timer
let buttonClickedCount = 0

window.addEventListener('load', () => {
  timer = setTimeout(() => {
    alert('5 secs passed')
  }, 2000)
})

button.addEventListener('click', () => {
  promiseFunc()
})

const promiseFunc = () => {
  return new Promise(resolve => {
    resolve(++buttonClickedCount)
  })
    .then(count => {
      if (count === 1) {
        clearTimeout(timer)
        console.log('Timer cancelled') //intuitive log info
        return count //for future use cases
      } else {
        return Promise.reject(count)
      }
    })
    .catch(error => {
      console.log(`Clicked ${error} times`) //intuitive log info
    })
}
