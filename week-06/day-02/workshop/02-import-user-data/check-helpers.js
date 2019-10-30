const { queryWithPromise } = require('./mysql-connection')
const { selectRowSQL } = require('./sql-helpers')

const reducer = (accumulator, currentValue) => accumulator && currentValue

const checkARowData = async (row, tableName) => {
  let rowSelectionSQL = selectRowSQL(row.id, tableName)
  let rowInDB = await queryWithPromise(rowSelectionSQL)
  let keyValuePairInDB = Object.entries(rowInDB[0])
  const fullyCheckedRows = keyValuePairInDB.map(([key, value]) => {
    if (value == row[key.toString()] || !value) {
      return true
    }
    return false
  })

  const result = fullyCheckedRows.reduce(reducer, true)
  return result ? result : new Error('data not matched')
}

module.exports = {
  checkARowData
}
