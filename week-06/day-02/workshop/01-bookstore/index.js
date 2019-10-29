//---------------------------consts---------------------------//
require('dotenv').config()

//------------------------establish server------------------------------//
const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use('/static', express.static('static'))
app.use(express.json()) /*no need for this task*/

//---------------------------establish  database connection---------------------------//
let mysql = require('mysql')

let connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
})
connection.connect()

//--------------------------sqls----------------------------//
const sql_book_titles = 'SELECT book_name FROM book_mast'
const sql_book_all = `SELECT * FROM book_mast`

//--------------------------wrapp query result with promise----------------------------//
let queryWithPromise = sqlString =>
  new Promise((resolve, reject) => {
    connection.query(sqlString, (err, result) => {
      /*this err is only responsible for database, e.g sql statement is wrong, or database internal errors and the like.*/
      if (err) {
        reject(err)
      }
      resolve(result)
    })
  })

//------------------------response on server------------------------------//
app.get('/booktitles', async (req, res) => {
  try {
    let titles = await queryWithPromise(sql_book_titles)
    res.render('booktitles', { titles })
  } catch (err) {
    res.render('errorPage', { err })
  }
})

app.get('/books', async (req, res) => {
  try {
    let books = await queryWithPromise(sql_book_all)
    res.render('books', { books })
  } catch (err) {
    res.render('errorPage', { err })
  }
})

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server running on port ${process.env.SERVER_PORT}`)
})
