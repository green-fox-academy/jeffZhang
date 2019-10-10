let d = document

let list = d.querySelector('ul')
let result = d.querySelector('p')
let button = d.querySelector('button')

button.addEventListener('click', event => {
  event.preventDefault()
  result.textContent = list.children.length
})
