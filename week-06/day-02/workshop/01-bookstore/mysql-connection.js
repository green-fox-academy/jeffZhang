//---------------------------establish  database connection---------------------------//
let mysql = require('mysql')

let connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
})
connection.connect()

//--------------------------wrapp query result with promise----------------------------//
const queryWithPromise = (sqlString, inputQuery = []) =>
  new Promise((resolve, reject) => {
    const query = connection.query(sqlString, inputQuery, (err, result) => {
      /*this err is only responsible for database, e.g sql statement is wrong, or database internal errors and the like.*/
      if (err) {
        reject(err)
      }
      resolve(result)
    })
  })

module.exports = {
  connection,
  queryWithPromise
}
