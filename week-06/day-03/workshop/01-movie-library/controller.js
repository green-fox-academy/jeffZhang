const http = require('http')
const url = require('url')
const { getMovieId, getGenreQuery } = require('./helpers')

module.exports = http.createServer((req, res) => {
  var service = require('./service.js')
  const reqUrl = url.parse(req.url, true)

  const movieId = getMovieId(reqUrl)
  const genreQuery = getGenreQuery(reqUrl)

  if (movieId === undefined) {
    if (req.method === 'GET') {
      service.getMovies(genreQuery, res)
      return
    } else if (req.method === 'POST') {
      service.postAMovie(req, res)
      return
    }
  } else {
    if (req.method === 'GET') {
      service.getMovieById(movieId, res)
      return
    } else if (req.method === 'DELETE') {
      service.deleteMovieById(movieId, req, res)
      return
    } else if (req.method === 'PUT') {
      service.putMovieById(movieId, req, res)
      return
    }
  }

  service.invalidRequest(req, res)
})
