let movies = require('./data')
const url = require('url')

exports.getMovies = function(genre, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')

  if (genre) {
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.end(JSON.stringify(filteredMovies))
    return
  }
  res.end(JSON.stringify(movies))
}

exports.postAMovie = (req, res) => {
  let [movieId, movieName, movieGenre] = [undefined]

  req.on('data', function(chunk) {
    /*chunk is a binary buffer*/
    const postData = JSON.parse(chunk)
    movieId = postData.id
    movieName = postData.name
    movieGenre = postData.genre
  })

  req.on('end', function() {
    if (req.headers.authorization === 'top-secret') {
      const existed = movies.some(movie => movie.name === movieName)
      if (!movieName || !movieId) {
        res.statusCode = 400
        res.setHeader('Content-Type', 'text/plain')
        res.end('No moive name found in your post data')
        return
      }

      if (existed) {
        res.statusCode = 409
        res.setHeader('Content-Type', 'text/plain')
        res.end(`${movieName} is already in the database`)
        return
      }

      movies.push({
        id: movieId,
        name: movieName,
        genre: movieGenre || 'unknow'
      })

      res.statusCode = 201
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(movies))
      return
    }

    res.statusCode = 403
    res.setHeader('Content-Type', 'text/plain')
    res.end('not authorized')
  })
}

exports.getMovieById = function(movieId, res) {
  const filteredMovies = movies.find(movie => movie.id === parseInt(movieId))
  if (filteredMovies) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(filteredMovies))
    return
  }
  res.statusCode = 404
  res.setHeader('Content-Type', 'text/plain')
  res.end(`cant find that movie with id ${movieId}`)
}

exports.deleteMovieById = (movieId, req, res) => {
  req.on('data', function(chunk) {
    console.log('do nothing')
  })

  req.on('end', function() {
    if (req.headers.authorization === 'top-secret') {
      const originLength = movies.length
      movies = movies.filter(movie => movie.id !== parseInt(movieId))
      if (originLength === movies.length) {
        res.statusCode = 403
        res.setHeader('Content-Type', 'text/plain')
        res.end(
          `couldn't find the movie with id ${movieId}, no deletion happened`
        )
        return
      }
      res.statusCode = 204
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(movies))
      return
    }

    res.statusCode = 403
    res.setHeader('Content-Type', 'text/plain')
    res.end('not authorized')
  })
}

exports.updateMovieById = (id, req, res) => {
  let [movieId, movieName, movieGenre] = [undefined]

  req.on('data', function(chunk) {
    const postData = JSON.parse(chunk)
    movieId = postData.id
    movieName = postData.name
    movieGenre = postData.genre
  })

  req.on('end', function() {
    if (req.headers.authorization === 'top-secret') {
      const existed = movies.some(movie => movie.id === parseInt(id))
      if (!movieName || !movieId || !movieGenre) {
        res.statusCode = 400
        res.setHeader('Content-Type', 'text/plain')
        res.end('Lack of information in your post data')
        return
      }

      if (!existed) {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain')
        res.end(`cant find that movie with id ${id}`)
        return
      }

      if (parseInt(id) !== movieId) {
        res.statusCode = 400
        res.setHeader('Content-Type', 'text/plain')
        res.end(`url id is not the same with id in the body`)
        return
      }

      movies = movies.filter(movie => movie.id !== parseInt(id))
      movies.push({ id: movieId, name: movieName, genre: movieGenre })

      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(movies))
      return
    }

    res.statusCode = 403
    res.setHeader('Content-Type', 'text/plain')
    res.end('not authorized')
  })
}

exports.invalidRequest = function(req, res) {
  res.statusCode = 404
  res.setHeader('Content-Type', 'text/plain')
  res.end('Invalid Request')
}

exports.test = () => {
  body = ''

  req.on('data', function(chunk) {
    /*chunk is a binary buffer*/
    console.log('execute just once and chunk is', chunk.toString())
    body += chunk
    console.log(body)
  })

  req.on('end', function() {
    postBody = JSON.parse(body)
    console.log('postBoy', postBody)

    var response = {
      text: 'Post Request Value is  ' + postBody.a
    }

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(response))
  })
}
