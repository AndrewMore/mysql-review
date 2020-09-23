const mysql = require('mysql');

// TODO: establish connection
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'root',
  database : 'ReviewDB'
});

connection.connect(function(err) {
  if (err) {
    throw err;
  } else {
    console.log('Connected');
  }
});

module.exports = connection;