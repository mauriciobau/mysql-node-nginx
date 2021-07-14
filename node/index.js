const express = require('express')
const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Euuuu')`
connection.query(sql)

const queryString = "SELECT * FROM people"
let results
const ret = connection.query(queryString, function (err, result, fields) {
  if (err) throw err;
  results = result
})
connection.end()


app.get('/', (req,res) => {
  res.send(`
  <h1>Full Cycle Rocks!</h1>
  ${results.map(result => result.name)}
  `)
})

app.listen(port, ()=> {
  console.log('Rodando na porta ' + port)
})