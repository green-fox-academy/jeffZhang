const Cell = require('./Cell')
const { getRandomInt, getNeighbors } = require('./helpers')

class Board {
  constructor(boardSize, mineCount) {
    //use map instead of object to store all the cells
    //reason(note for myself): map has order.
    this.board = new Map()
    this.gameOver = false

    for (let row = 0; row < boardSize; row++) {
      for (let column = 0; column < boardSize; column++) {
        this.board.set(
          row + '' + column,
          new Cell(row, column, false, false, 0)
        )
      }
    }
    this.randomlyAssignMines(mineCount, boardSize)
    this.calculateNeighborMineCounts(boardSize)
  }

  randomlyAssignMines(mineCount, boardSize) {
    let mineCoordinates = []

    for (let i = 0; i < mineCount; i++) {
      let randomRowCoordinate = getRandomInt(0, boardSize)
      let randomColumnCoordinate = getRandomInt(0, boardSize)
      let cell = randomRowCoordinate + '' + randomColumnCoordinate

      while (mineCoordinates.includes(cell)) {
        randomRowCoordinate = getRandomInt(0, boardSize)
        randomColumnCoordinate = getRandomInt(0, boardSize)
        cell = randomRowCoordinate + '' + randomColumnCoordinate
      }
      mineCoordinates.push(cell)
      this.board.get(cell).mined = true
    }
  }

  calculateNeighborMineCounts(boardSize) {
    for (let row = 0; row < boardSize; row++) {
      for (let column = 0; column < boardSize; column++) {
        let id = row + '' + column
        let cell = this.board.get(id)
        let neighborMineCount = 0

        if (!cell.mined) {
          let neighbors = getNeighbors(id)
          for (let i = 0; i < neighbors.length; i++) {
            neighborMineCount += this.isMined(neighbors[i])
          }
          cell.neighborMineCount = neighborMineCount
        }
      }
    }
  }

  isMined(id) {
    return this.board.get(id) ? (this.board.get(id).mined ? 1 : 0) : 0
  }

  openACell(id) {
    if (!this.gameOver) {
      let cell = this.board.get(id)

      if (!cell.opened) {
        if (cell.mined) {
          this.gameOver = true
          console.log('!Boom.')
          return
        } else {
          cell.opened = true
          if (!cell.neighborMineCount) {
            let neighbors = getNeighbors(id)
            for (let i = 0; i < neighbors.length; i++) {
              // console.log(`neighbors of ${id}`, neighbors)
              let neighborID = neighbors[i],
                neighbor = this.board.get(neighborID)
              if (!neighbor.opened && !neighbor.mined) {
                this.openACell(neighborID)
              }
            }
          }
        }
      } else {
        console.log('This cell has been opened.')
        return
      }
    }
  }

  openAllCells() {
    this.board.forEach(cell => {
      cell.opened = true
    })
  }

  get status() {
    let counter = 1,
      result = ''

    if (this.gameOver) {
      this.openAllCells()
    }
    this.board.forEach(cell => {
      result += cell.status + ' '
      if (!(counter % 10)) {
        result += '\n'
      }
      counter++
    })
    return result
  }
}

module.exports = Board
