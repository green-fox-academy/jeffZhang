const DOMAIN = 'https://swapi.co/api/people/?search='

const d = document
let button = d.querySelector('button')
let input = d.querySelector('input')
let nameUl = d.querySelector('.names')
let movieUl = d.querySelector('.movies')

//event listeners
input.addEventListener('input', event => {
  if (event.target.value) {
    button.disabled = false
  } else {
    button.disabled = true
  }
})

button.addEventListener('click', event => {
  event.preventDefault()
  let search = input.value
  fetchPeople(search)
})

//movies
const createAMovie = movie => {
  let li = d.createElement('li')
  li.textContent = movie.title
  movieUl.appendChild(li)
}

const fetchAMovie = movieUrl => {
  const dataRequest = new XMLHttpRequest()
  dataRequest.onreadystatechange = () => {
    if (dataRequest.readyState === 4) {
    //   console.log(JSON.parse(dataRequest.response))
      let movie = JSON.parse(dataRequest.response)
      createAMovie(movie)
    }
  }
  dataRequest.open('GET', movieUrl)
  dataRequest.send()
}

const fetchMovies = movieUrls => () => {
  movieUl.innerHTML = ''
  movieUrls.forEach(movieUrl => {
    fetchAMovie(movieUrl)
  })
}

//names
const createNameList = people => {
  people.forEach(person => {
    let li = d.createElement('li')
    li.textContent = person.name
    nameUl.appendChild(li)
    let movieUrls = person.films
    li.addEventListener('click', fetchMovies(movieUrls))
  })
}

const fetchPeople = search => {
  const dataRequest = new XMLHttpRequest()
  dataRequest.onreadystatechange = () => {
    if (dataRequest.readyState === 4) {
    //   console.log(JSON.parse(dataRequest.response))
      let people = JSON.parse(dataRequest.response).results
      createNameList(people)
    }
  }
  dataRequest.open('GET', `${DOMAIN}${search}`)
  dataRequest.send()
}
