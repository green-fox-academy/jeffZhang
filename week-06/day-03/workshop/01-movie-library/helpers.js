const getMovieId = reqUrl => {
  const pathElements = reqUrl.pathname.split('/')
  // console.log(pathElements)
  return pathElements[2] ? pathElements[2] : undefined
}

const getGenreQuery = reqUrl => {
  return reqUrl.query.genre
}

module.exports = { getMovieId, getGenreQuery }
