const db = require('./index.js');

var dbHelpers = {
  get : callback => {
    db.query('SELECT * from Tasks', (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  },
  post : (data, callback) => {
    db.query(`INSERT INTO Tasks (name, rating) VALUES ('${data.name}', ${data.ratings});`,(err, result) => {
      if (err) {
        console.log('Post Failed @database');
      } else {
        console.log('Post Success @database');
      }
    })
  }
}

module.exports = dbHelpers;