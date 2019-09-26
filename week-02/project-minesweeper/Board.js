const Cell = require('./Cell')

module.exports = class Board {
  constructor(boardSize, mineCount) {
    this.board = {}

    for (let row = 0; row < boardSize; row++) {
      for (let column = 0; column < boardSize; column++) {
        this.board[row + '' + column] = new Cell(row, column)
      }
    }

    this.randomlyAssignMines(boardSize)
    this.calculateNeighborMineCounts(boardSize)
  }

  randomlyAssignMines(mineCount) {}

  calculateNeighborMineCounts(boardSize) {}
}
