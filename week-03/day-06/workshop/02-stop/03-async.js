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
  asyncFunc()
})

const asyncFunc = async () => {
  let count = await new Promise(resolve => resolve(++buttonClickedCount))
  if (count === 1) {
    console.log('Timer cancelled') //intuitive log info
    await clearTimeout(timer)
  } else {
    console.log(`Clicked ${count} times`) //intuitive log info
  }
  return count //for future use cases
}
