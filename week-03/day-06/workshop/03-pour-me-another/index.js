const URL = './data.json'

const d = document
const header = d.querySelector('h1')
const button = d.querySelector('button')

const fetchNames = url => {
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error.message))
}

const pourMeAnothr = async url => {
  let { names: nameArray } = await fetchNames(url)
  button.disabled = false //enable this button when the data is loaded
  button.addEventListener('click', () => {
    header.textContent = showNextName(nameArray).next().value
  })
}

const showNextName = function*(nameArray) {
  nameArray.length ? yield nameArray.shift() : yield 'no names any more'
}

pourMeAnothr(URL)
