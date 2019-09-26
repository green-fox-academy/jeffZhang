let getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

let getNeighbors = id => {
  let neighbors = []
  let row = parseInt(id[0])
  let column = parseInt(id[1])

  neighbors.push(row - 1 + '' + (column - 1))
  neighbors.push(row - 1 + '' + column)
  neighbors.push(row - 1 + '' + (column + 1))
  neighbors.push(row + '' + (column - 1))
  neighbors.push(row + '' + (column + 1))
  neighbors.push(row + 1 + '' + (column - 1))
  neighbors.push(row + 1 + '' + column)
  neighbors.push(row + 1 + '' + (column + 1))

  //this for loop is used to get rid of negative indices and indices bigger than 9
  for (let i = 0; i < neighbors.length; i++) {
    if (neighbors[i].length > 2) {
      neighbors.splice(i, 1)
      i--
    }
  }
  return neighbors
}

module.exports = { getRandomInt, getNeighbors }
