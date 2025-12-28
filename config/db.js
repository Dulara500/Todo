const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'todo'
})

connection.connect()

connection.query('SELECT * FROM task', (err, rows, fields) => {
  if (err) throw err

  console.log(rows)
})

connection.end()
