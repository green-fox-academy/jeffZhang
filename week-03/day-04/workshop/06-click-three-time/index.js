let d = document
let button = d.querySelector('button')
let para = d.querySelector('p')
let counter = 0
let after5Sec = false

this.addEventListener('load', () => {
  setTimeout(() => {
    after5Sec = true
  }, 5000)
})

button.addEventListener('click', () => {
  counter++
  if (after5Sec && counter > 3) {
    para.removeAttribute('hidden')
  }
})
