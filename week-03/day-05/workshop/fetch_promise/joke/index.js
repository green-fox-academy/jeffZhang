const URL = 'http://api.icndb.com/jokes/random'
const d = document

let button = d.querySelector('button')
let container = d.querySelector('.container')

button.addEventListener('click', event => {
  event.preventDefault()
  fetch(URL)
    .then(response => response.json(), error => Promise.reject(error))
    .then(data => {
      new Promise(() => {
        container.textContent = data.value.joke
      })
    })
    .catch(error => {
      console.log(error.message)
    })
    .finally(() => {
      //do something if needed
    })
})
