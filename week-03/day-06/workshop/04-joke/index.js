const URL = 'http://api.icndb.com/jokes/random'
const d = document

let button = d.querySelector('button')
let container = d.querySelector('.container')

button.addEventListener('click', event => {
  event.preventDefault()
  fetchAJoke(URL)
})

const fetchAJoke = async URL => {
  try {
    let response = await fetch(URL)
    let data = await response.json()
    let joke = await data.value.joke
    container.textContent = joke
  } catch (error) {
    console.log(error.message)
  }
}
