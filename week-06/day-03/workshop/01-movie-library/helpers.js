const getMovieId = reqUrl => {
  const pathElements = reqUrl.pathname.split('/')
  let movieId = parseInt(pathElements[2])

  return movieId ? movieId : undefined
}

const getGenreQuery = reqUrl => {
  return reqUrl.query.genre
}

module.exports = { getMovieId, getGenreQuery }
