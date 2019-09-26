module.exports = class Cell {
  constructor(row, column, opened, mined, neighborMineCount) {
    this.id = row + '' + column
    this.row = row
    this.column = column
    this.opened = opened
    this.mined = mined
    this.neighborMineCount = neighborMineCount
  }
}
