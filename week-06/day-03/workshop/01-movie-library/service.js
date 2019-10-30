const AUTHORIZATION = process.env.AUTHORIZATION
let movies = require('./data')

exports.getMovies = (genre, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')

  if (genre) {
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.end(JSON.stringify(filteredMovies))
    return
  }
  res.end(JSON.stringify(movies))
}

exports.getMovieById = (movieId, res) => {
  const filteredMovies = movies.find(movie => movie.id === movieId)
  if (filteredMovies) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(filteredMovies))
    return
  }
  res.statusCode = 404
  res.setHeader('Content-Type', 'text/plain')
  res.end(`Couldn't find that movie with id ${movieId}`)
}

exports.deleteMovieById = (movieId, req, res) => {
  if (req.headers.authorization === AUTHORIZATION) {
    const originLength = movies.length
    movies = movies.filter(movie => movie.id !== movieId)

    if (originLength === movies.length) {
      res.statusCode = 404
      res.setHeader('Content-Type', 'text/plain')
      res.end(
        `couldn't find the movie with id ${movieId}, no deletion happened`
      )
      return
    }

    res.statusCode = 204
    /*doesn't need return anything for a delete operation, nothing will return...*/
    res.end()
    return
  }

  res.statusCode = 403
  res.setHeader('Content-Type', 'text/plain')
  res.end('not authorized')
}

exports.postAMovie = (req, res) => {
  let [movieId, movieName, movieGenre] = [undefined]

  req.on('data', function(chunk) {
    const postData = JSON.parse(chunk)
    movieId = postData.id
    movieName = postData.name
    movieGenre = postData.genre
  })

  req.on('end', function() {
    if (req.headers.authorization === AUTHORIZATION) {
      const existed = movies.some(
        movie => movie.name === movieName || movie.id === movieId
      )
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

exports.putMovieById = (id, req, res) => {
  let [movieId, movieName, movieGenre] = [undefined]

  req.on('data', function(chunk) {
    const postData = JSON.parse(chunk)
    movieId = postData.id
    movieName = postData.name
    movieGenre = postData.genre
  })

  req.on('end', function() {
    if (req.headers.authorization === AUTHORIZATION) {
      const existed = movies.some(movie => movie.id === id)
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

      if (id !== movieId) {
        res.statusCode = 400
        res.setHeader('Content-Type', 'text/plain')
        res.end(`url id is not the same with id in the body`)
        return
      }

      movies = movies.filter(movie => movie.id !== id)
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

exports.invalidRequest = (req, res) => {
  res.statusCode = 404
  res.setHeader('Content-Type', 'text/plain')
  res.end('Invalid Request 404')
}
