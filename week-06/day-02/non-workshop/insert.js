var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1993',
  database: 'W6D1_todo_app'
})

connection.connect()

var todo = {
  todo_name: 'something',
  description: null,
  due: '2019-10-31',
  done: false
}

const query = connection.query('insert into todos set ?', todo, function(
  err,
  result
) {
  if (err) {
    console.error(err)
    return
  }
  console.log('result', result)
})

connection.end()
