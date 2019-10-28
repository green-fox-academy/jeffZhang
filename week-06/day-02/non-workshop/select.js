var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1993',
  database: 'W6D1_todo_app'
})

connection.connect()

let id = '1; drop table todos;'

connection.query('select * from todos where todo_id = ?', id, (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
})
connection.end()
