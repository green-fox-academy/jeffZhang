//-------------------------env & helpers-----------------------------//
require('dotenv').config()
const { sql_book_titles, sql_book_all } = require('./sql-helpers')

//---------------------------query promise---------------------------//
const { queryWithPromise } = require('./mysql-connection')

//------------------------establish server------------------------------//
const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use('/static', express.static('static'))
app.use(express.json()) /*no need for this task*/

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
