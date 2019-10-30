const http = require('http')
const url = require('url')
const { getMovieId, getGenreQuery } = require('./helpers')

module.exports = http.createServer((req, res) => {
  var service = require('./service.js')
  const reqUrl = url.parse(req.url, true)
  // console.log(req.headers)

  const movieId = getMovieId(reqUrl)
  const genreQuery = getGenreQuery(reqUrl)

  if (movieId === undefined) {
    console.log('movieId', movieId)
    if (req.method === 'GET') {
      service.getMovies(genreQuery, res)
    }
    if (req.method === 'POST') {
      service.postAMovie(req, res)
    }
  } else {
    if (req.method === 'GET') {
      service.getMovieById(movieId, res)
    } else if (req.method === 'DELETE') {
      service.deleteMovieById(movieId, req, res)
    } else if (req.method === 'PUT') {
      service.updateMovieById(movieId, req, res)
    }
  }
})
