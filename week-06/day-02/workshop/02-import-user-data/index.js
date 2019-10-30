require('dotenv').config()
const csv = require('csv-parser')
const fs = require('fs')
const { connection, queryWithPromise } = require('./mysql-connection')
const { dropTableSQL, createTableSQL, insertDataSQL } = require('./sql-helpers')
const { checkARowData } = require('./check-helpers')

const main = async () => {
  const fileName = process.env.CSV_USERS || 'users.csv'
  const tableName = fileName.split('.')[0]
  const tableDropSQL = dropTableSQL(tableName)
  const tableCreationSQL = createTableSQL(tableName)

  try {
    /*1st drop table (if exists)*/
    queryWithPromise(tableDropSQL)
    /*2nd create table (if not exists)*/
    queryWithPromise(tableCreationSQL)
    /*3rd read file and insert*/
    fs.createReadStream(fileName)
      .pipe(csv())
      .on('data', data => {
        /*4th a data line per time (this part executes iteratively)*/
        const tableInsertSQL = insertDataSQL(data, tableName)
        queryWithPromise(tableInsertSQL).catch(err => console.log(err))
        /*5th check whether date matched*/
        checkARowData(data, tableName)
      })
      .on('end', () => {
        /*6th after 4th, this end only executes once*/
        console.log('all data inserted and checked')
      })
    setTimeout(() => {
      console.log('DATABASE DISCONNECT')
      connection.end()
    }, 2000)
  } catch (err) {
    console.log(err.code)
  }
}

main()
